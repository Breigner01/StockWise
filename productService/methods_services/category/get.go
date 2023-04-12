package category

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
)

func GetAllCategories(conf config.Config) ([]*category.Category, error) {

	categories, err := categoryDB.GetAllCategories(conf.DB)
	if err != nil {
		return nil, err
	}

	var categoriesList []*category.Category
	for _, c := range categories {
		categoriesList = append(categoriesList, &category.Category{
			Id:   int32(c.ID),
			Name: c.Name,
		})
	}

	return categoriesList, nil
}
