package product

import (
	"strconv"

	"github.com/Breigner01/SOEN487-Project3/productService/config"
	broker "github.com/Breigner01/SOEN487-Project3/productService/message_broker"
	"github.com/Breigner01/SOEN487-Project3/productService/methods_database/product"
)

func DeleteProduct(conf config.Config, id int) error {

	p, err := product.GetProductByID(conf.DB, id)
	if err != nil {
		return err
	}

	err = product.DeleteProduct(conf.DB, p)

	if err == nil {
		writer := broker.KafkaProducer()
		message := broker.PrductDeletionMessage{Name: p.Name}
		writer.SendMessage(broker.ProductDeletion, strconv.Itoa(id), message.CreateMessage())
	}

	return err
}
