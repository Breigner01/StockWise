package product

import (
	"fmt"
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/database/brand"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/database/category"
	productDB "github.com/Breigner01/SOEN487-Project3/productService/database/product"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
)

func CreateProduct(conf config.Config, p *product.Product) error {

	brand, err := brandDB.GetByName(conf.DB, p.Brand)
	if err != nil {
		return err
	} else if brand == nil {
		return fmt.Errorf("brand %s does not exist", p.Brand)
	}

	category, err := categoryDB.GetByName(conf.DB, p.Category)
	if err != nil {
		return err
	} else if category == nil {
		return fmt.Errorf("category %s does not exist", p.Category)
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
