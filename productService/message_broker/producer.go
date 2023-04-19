package message_broker

import (
	"context"
	"encoding/json"
	"log"

	kafka "github.com/segmentio/kafka-go"
)

const (
	ProductCreation string = "product-created"
	ProductDeletion        = "remove-item"
)

type Writer struct {
	Writer *kafka.Writer
}

type ProductCreationMessage struct {
	Name  string
	Price float64
}

type PrductDeletionMessage struct {
	Name string
}

func KafkaProducer() *Writer {
	writer := &kafka.Writer{
		Addr: kafka.TCP("localhost:9092"),
	}

	return &Writer{
		Writer: writer,
	}
}

func (m ProductCreationMessage) CreateMessage() []byte {
	b, _ := json.Marshal(m)
	return b
}

func (m PrductDeletionMessage) CreateMessage() []byte {
	b, _ := json.Marshal(m)
	return b
}

func (producer *Writer) SendMessage(topic string, key string, message []byte) {
	err := producer.Writer.WriteMessages(context.Background(),
		kafka.Message{
			Topic: topic,
			Key:   []byte(key),
			Value: message,
		},
	)

	if err != nil {
		log.Fatal("failed to write messages:", err)
	}

	if err := producer.Writer.Close(); err != nil {
		log.Fatal("failed to close writer:", err)
	}
}
