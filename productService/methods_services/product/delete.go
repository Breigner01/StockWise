package product

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/methods_database/product"
)

func DeleteProduct(conf config.Config, id int) error {

	p, err := product.GetProductByID(conf.DB, id)
	if err != nil {
		return err
	}

	err = product.DeleteProduct(conf.DB, p)
	return err
}
