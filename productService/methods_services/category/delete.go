package category

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
)

func DeleteCategory(conf config.Config, id int) error {

	c, err := categoryDB.GetByID(conf.DB, id)
	if err != nil {
		return err
	}

	return categoryDB.DeleteCategory(conf.DB, c)
}
