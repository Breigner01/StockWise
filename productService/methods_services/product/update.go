package product

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	productDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
)

func UpdateProduct(conf config.Config, p *product.Product) error {

	_, err := productDB.UpdateProduct(conf.DB, &ent.Product{
		ID:    int(p.Id),
		Name:  p.Name,
		Price: p.Price,
		Edges: ent.ProductEdges{
			Brand: &ent.Brand{
				Name: p.Brand,
			},
			Category: &ent.Category{
				Name: p.Category,
			},
		},
	})

	return err
}
