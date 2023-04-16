package category

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
)

func GetAllCategories(conf config.Config) ([]*ent.Category, error) {

	return categoryDB.GetAllCategories(conf.DB)
}
