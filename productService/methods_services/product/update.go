package product

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/brand"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
	productDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
)

func UpdateProduct(conf config.Config, p *product.Product) error {

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

	_, err = productDB.UpdateProduct(conf.DB, &ent.Product{
		ID:          int(p.Id),
		Name:        p.Name,
		Price:       p.Price,
		Description: p.Description,
		Edges: ent.ProductEdges{
			Brand:    brand,
			Category: category,
		},
	})

	return err
}
