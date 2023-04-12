package category

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
)

func CreateCategory(conf config.Config, c *category.Category) error {

	_, err := categoryDB.CreateCategory(conf.DB, &ent.Category{
		Name: c.Name,
	})

	return err
}
