package product

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	productDB "github.com/Breigner01/SOEN487-Project3/productService/database/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/product"
)

func GetProductByID(conf config.Config, id int) (*product.Product, error) {

	p, err := productDB.GetProductByID(conf.DB, id)
	if err != nil {
		return nil, err
	}

	return &product.Product{
		Id:          int64(p.ID),
		Name:        p.Name,
		Description: p.Description,
		Price:       p.Price,
		Brand:       p.Edges.Brand.Name,
		Category:    p.Edges.Category.Name,
	}, nil
}
