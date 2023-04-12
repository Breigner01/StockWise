package com.example.endpoint;

import com.example.*;
import com.example.dao.ItemDao;
import com.example.dto.ItemDto;
import com.example.dto.OwnerDto;
import com.example.producer.MessageBroker;
import com.example.repository.ItemRepository;
import io.grpc.Metadata;
import io.grpc.Status;
import io.grpc.protobuf.ProtoUtils;
import io.grpc.stub.StreamObserver;
import io.micronaut.data.exceptions.EmptyResultException;
import jakarta.inject.Inject;

import java.util.ArrayList;

public class ItemEndpoint extends InventoryServiceGrpc.InventoryServiceImplBase {

    @Inject
    ItemRepository itemRepository;

    @Inject
    MessageBroker messageBroker;

    @Override
    public void viewInventory(InventoryRequest request, StreamObserver<InventoryReply> responseObserver) {
        final String sku = request.getSku();
        final ArrayList<Item> items = new ArrayList<>();
        itemRepository.findAllBySku(sku).forEach(itemDao -> items.add(itemDao.toItem()));

        final InventoryReply response = InventoryReply.newBuilder()
                .addAllItems(items)
                .build();

        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }

    @Override
    public void decreaseInventory(ItemRequest request, StreamObserver<ItemReply> responseObserver) {
        final OwnerDto ownerDto = new OwnerDto(request.getOwnerId());
        final ItemDto itemDto = new ItemDto(request.getSku(), request.getQuantity());

        try {
            final ItemDao itemDao = itemRepository.findByItemPK(new ItemDao.ItemPK(ownerDto.getId(), itemDto.getSku()));

            if (itemDao.getAvailable() == 0) {
                final Metadata.Key<EmptyInventoryErrorResponse> errorResponseKey = ProtoUtils.keyForProto(EmptyInventoryErrorResponse.getDefaultInstance());
                final EmptyInventoryErrorResponse errorResponse = EmptyInventoryErrorResponse.newBuilder()
                        .setOwnerId(itemDao.getOwnerId())
                        .setSku(itemDao.getSku())
                        .build();
                final Metadata metadata = new Metadata();
                metadata.put(errorResponseKey, errorResponse);
                responseObserver.onError(Status.OUT_OF_RANGE
                        .withDescription("Inventory is empty")
                        .asException(metadata)
                );
                return;
            }

            if (itemDao.getAvailable() < itemDto.getQuantity()) {
                final Metadata.Key<LowInventoryErrorResponse> errorResponseKey = ProtoUtils.keyForProto(LowInventoryErrorResponse.getDefaultInstance());
                final LowInventoryErrorResponse errorResponse = LowInventoryErrorResponse.newBuilder()
                        .setOwnerId(itemDao.getOwnerId())
                        .setSku(itemDao.getSku())
                        .setQuantity(itemDto.getQuantity())
                        .setAvailable(itemDao.getAvailable())
                        .build();
                final Metadata metadata = new Metadata();
                metadata.put(errorResponseKey, errorResponse);
                responseObserver.onError(Status.OUT_OF_RANGE
                        .withDescription("Not enough inventory to serve client")
                        .asException(metadata)
                );
                return;
            }

            itemDao.decreaseInventory(itemDto.getQuantity());
            itemRepository.updateByItemPK(itemDao.getItemPK(), itemDao);

            if (itemDao.getAvailable() < 5) {
                messageBroker.sendLowInventoryMessage(itemDao.getOwnerId(), itemDao.getSku(), Integer.toString(itemDao.getAvailable()));
            }

            final ItemReply response = ItemReply.newBuilder()
                    .setMessage("success")
                    .build();

            responseObserver.onNext(response);
            responseObserver.onCompleted();
        } catch (EmptyResultException e) {
            final Metadata.Key<NoProductErrorResponse> errorResponseKey = ProtoUtils.keyForProto(NoProductErrorResponse.getDefaultInstance());
            final NoProductErrorResponse errorResponse = NoProductErrorResponse.newBuilder()
                    .setOwnerId(ownerDto.getId())
                    .setSku(itemDto.getSku())
                    .build();
            final Metadata metadata = new Metadata();
            metadata.put(errorResponseKey, errorResponse);
            responseObserver.onError(Status.INVALID_ARGUMENT
                    .withDescription("Product is not in inventory")
                    .asException(metadata)
            );
        }
    }

    @Override
    public void addInventory(ItemRequest request, StreamObserver<ItemReply> responseObserver) {
        final OwnerDto ownerDto = new OwnerDto(request.getOwnerId());
        final ItemDto itemDto = new ItemDto(request.getSku(), request.getQuantity());

        try {
            final ItemDao itemDao = itemRepository.findByItemPK(new ItemDao.ItemPK(ownerDto.getId(), itemDto.getSku()));

            itemDao.insertInTransit(itemDto.getQuantity());
            itemRepository.updateByItemPK(itemDao.getItemPK(), itemDao);
            messageBroker.createDeliveryNote(itemDao.getOwnerId(), itemDao.getSku());

            final ItemReply response = ItemReply.newBuilder()
                    .setMessage("success")
                    .build();

            responseObserver.onNext(response);
            responseObserver.onCompleted();
        } catch (EmptyResultException e) {
            final ItemDao newItem = new ItemDao(ownerDto.getId(), itemDto.getSku());
            newItem.setQuantity(itemDto.getQuantity());
            newItem.setInTransit(itemDto.getQuantity());

            itemRepository.save(newItem);

            final ItemReply response = ItemReply.newBuilder()
                    .setMessage("success")
                    .build();

            responseObserver.onNext(response);
            responseObserver.onCompleted();
        }
    }
}
