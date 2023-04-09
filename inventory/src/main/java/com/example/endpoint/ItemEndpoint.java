package com.example.endpoint;

import com.example.InventoryServiceGrpc;
import com.example.ItemReply;
import com.example.ItemRequest;
import com.example.dao.ItemDao;
import com.example.dto.ItemDto;
import com.example.dto.OwnerDto;
import com.example.repository.ItemRepository;
import io.grpc.stub.StreamObserver;
import jakarta.inject.Inject;

public class ItemEndpoint extends InventoryServiceGrpc.InventoryServiceImplBase {

    @Inject
    ItemRepository itemRepository;

    @Override
    public void decreaseInventory(ItemRequest request, StreamObserver<ItemReply> responseObserver) {
        final OwnerDto ownerDto = new OwnerDto(request.getOwnerId());
        final ItemDto itemDto = new ItemDto(request.getSku(), request.getQuantity());

        final ItemDao itemDao = itemRepository.findByItemPK(new ItemDao.ItemPK(ownerDto.getId(), itemDto.getSku()));

        if (itemDao.getAvailable() < itemDto.getQuantity()) {
            responseObserver.onError(new Error("Not enough inventory"));
            responseObserver.onCompleted();
        }

        final ItemReply response = ItemReply.newBuilder()
                .setMessage("success")
                .build();

        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
