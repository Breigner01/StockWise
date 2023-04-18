package com.example.producer;

import com.example.dao.ItemDao;
import com.example.dto.ItemDto;
import io.micronaut.configuration.kafka.annotation.KafkaClient;
import io.micronaut.configuration.kafka.annotation.KafkaKey;
import io.micronaut.configuration.kafka.annotation.Topic;
import io.micronaut.messaging.annotation.MessageHeader;

import org.json.JSONObject;
import org.json.JSONArray;

import java.util.ArrayList;

@KafkaClient
public interface MessageBroker {

    @Topic("low-inventory")
    void sendLowInventoryMessage(@KafkaKey  String ownerId, String message);

    @Topic("item-stored")
    void sendItemStoredMessage(@KafkaKey String ownerId, String message);

    @Topic("item-deleted")
    void sendItemDeletedMessage(@KafkaKey String sku, String message);

    @Topic("delivery-note")
    void createDeliveryNote(String ownerID, @MessageHeader("sku") String sku);

    static String createLowInventoryMessage(ItemDao itemDao) {
        JSONObject message = new JSONObject();
        message.put("sku", itemDao.getSku());
        message.put("available", itemDao.getAvailable());
        return message.toString();
    }

    static String createStoreItemMessage(ItemDto itemDto) {
        JSONObject message = new JSONObject();
        message.put("sku", itemDto.getSku());
        message.put("quantity", itemDto.getQuantity());
        return message.toString();
    }

    static String createDeleteProductMessage(ArrayList<String> ownerIds) {
        return (new JSONArray(ownerIds)).toString();
    }

    
}
