package com.example.producer;

import io.micronaut.configuration.kafka.annotation.KafkaClient;
import io.micronaut.configuration.kafka.annotation.Topic;
import io.micronaut.messaging.annotation.MessageHeader;

@KafkaClient
public interface MessageBroker {

    @Topic("low-inventory")
    void sendLowInventoryMessage(String ownerId, @MessageHeader("sku") String sku, @MessageHeader("quantity") String quantity);
}
