package category

import (
	category "github.com/Breigner01/SOEN487-Project3/productService/category"
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/database/category"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func UpdateCategory(conf config.Config, c *category.Category) error {

	_, err := categoryDB.UpdateCategory(conf.DB, &ent.Category{
		ID:   int(c.Id),
		Name: c.Name,
	})

	return err
}
