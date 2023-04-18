package com.example.producer;

import com.example.repository.ItemRepository;
import io.micronaut.configuration.kafka.annotation.KafkaListener;
import io.micronaut.configuration.kafka.annotation.OffsetReset;
import io.micronaut.configuration.kafka.annotation.Topic;
import jakarta.inject.Inject;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@KafkaListener(offsetReset = OffsetReset.EARLIEST)
public class ProductListener {
    @Inject
    ItemRepository itemRepository;

    @Inject
    MessageBroker messageBroker;

    @Topic("remove-item")
    void removeItem(String sku) {
        final ArrayList<String> ownerIds = StreamSupport
                .stream(itemRepository.findOwnerIdBySku(sku).spliterator(), false)
                .collect(Collectors.toCollection(ArrayList::new));

        if (ownerIds.size() > 0) {
            messageBroker.sendItemDeletedMessage(sku, MessageBroker.createDeleteProductMessage(ownerIds));
        }

        itemRepository.deleteByOwnerIdIn(ownerIds);
    }

}
