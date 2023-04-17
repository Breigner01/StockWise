package product

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/brand"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
	productDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
)

func CreateProduct(conf config.Config, p *product.Product) error {

	brand, err := brandDB.GetByName(conf.DB, p.Brand)
	if err != nil {
		if ent.IsNotFound(err) {
			brand, err = brandDB.CreateBrand(conf.DB, &ent.Brand{
				Name: p.Brand,
			})
			if err != nil {
				return err
			}
		} else {
			return err
		}
	}

	category, err := categoryDB.GetByName(conf.DB, p.Category)
	if err != nil {
		return err
	}

	_, err = productDB.CreateProduct(conf.DB, &ent.Product{
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
		return err
	}

	return nil
}
