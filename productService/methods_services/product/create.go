package product

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	broker "github.com/Breigner01/SOEN487-Project3/productService/message_broker"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/brand"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
	productDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
)

func CreateProduct(conf config.Config, p *product.Product) (*product.Product, error) {

	brand, err := brandDB.GetByName(conf.DB, p.Brand)
	if err != nil {
		if ent.IsNotFound(err) {
			brand, err = brandDB.CreateBrand(conf.DB, &ent.Brand{
				Name: p.Brand,
			})
			if err != nil {
				return nil, err
			}
		} else {
			return nil, err
		}
	}

	category, err := categoryDB.GetByName(conf.DB, p.Category)
	if err != nil {
		return nil, err
	}

	prod, err := productDB.CreateProduct(conf.DB, &ent.Product{
		ID:          0,
		Name:        p.Name,
		Description: p.Description,
		Price:       p.Price,
		Edges: ent.ProductEdges{
			Brand:    brand,
			Category: category,
		},
	})
	if err != nil {
		return nil, err
	}

	writer := broker.KafkaProducer()
	message := broker.ProductCreationMessage{Name: p.Name, Price: p.Price}
	writer.SendMessage(broker.ProductCreation, "0", message.CreateMessage())

	return &product.Product{
		Id:          int32(prod.ID),
		Name:        prod.Name,
		Description: prod.Description,
		Price:       prod.Price,
		Brand:       p.Brand,
		Category:    p.Category,
	}, nil
}
