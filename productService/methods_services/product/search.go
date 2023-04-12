package product

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	productDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
)

func SearchProductsByName(conf config.Config, name string) ([]*product.Product, error) {

	products, err := productDB.SearchProductsByName(conf.DB, name)
	if err != nil {
		return nil, err
	}

	var productsList []*product.Product
	for _, p := range products {
		productsList = append(productsList, &product.Product{
			Id:          int64(p.ID),
			Name:        p.Name,
			Description: p.Description,
			Price:       p.Price,
			Brand:       p.Edges.Brand.Name,
			Category:    p.Edges.Category.Name,
		})
	}

	return productsList, nil
}

func SearchProductsByBrand(conf config.Config, brandName string) ([]*product.Product, error) {

	products, err := productDB.SearchProductsByBrand(conf.DB, brandName)
	if err != nil {
		return nil, err
	}

	var productsList []*product.Product
	for _, p := range products {
		productsList = append(productsList, &product.Product{
			Id:          int64(p.ID),
			Name:        p.Name,
			Description: p.Description,
			Price:       p.Price,
			Brand:       p.Edges.Brand.Name,
			Category:    p.Edges.Category.Name,
		})
	}

	return productsList, nil
}

func SearchProductsByCategory(conf config.Config, categoryName string) ([]*product.Product, error) {

	products, err := productDB.SearchProductsByCategory(conf.DB, categoryName)
	if err != nil {
		return nil, err
	}

	var productsList []*product.Product
	for _, p := range products {
		productsList = append(productsList, &product.Product{
			Id:          int64(p.ID),
			Name:        p.Name,
			Description: p.Description,
			Price:       p.Price,
			Brand:       p.Edges.Brand.Name,
			Category:    p.Edges.Category.Name,
		})
	}

	return productsList, nil
}
