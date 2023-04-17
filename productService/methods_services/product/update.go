package product

import (
	"fmt"
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
		return err
	} else if brand == nil {
		brand, err = brandDB.CreateBrand(conf.DB, &ent.Brand{
			Name: p.Brand,
		})
	}

	category, err := categoryDB.GetByName(conf.DB, p.Category)
	if err != nil {
		return err
	} else if category == nil {
		return fmt.Errorf("category %s does not exist", p.Category)
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
