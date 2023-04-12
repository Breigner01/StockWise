package category

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/database/category"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func GetAllCategories(conf config.Config) ([]*ent.Category, error) {

	return categoryDB.GetAllCategories(conf.DB)
}
