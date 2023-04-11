package product

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/brand"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/category"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/product"
)

func SearchProductsByName(client *ent.Client, name string) ([]*ent.Product, error) {
	return client.Product.
		Query().
		Where(product.NameContains(name)).
		All(context.Background())
}

func SearchProductsByBrand(client *ent.Client, brandName string) ([]*ent.Product, error) {
	return client.Product.
		Query().
		Where(product.HasBrandWith(brand.NameContains(brandName))).
		All(context.Background())
}

func SearchProductsByCategory(client *ent.Client, categoryName string) ([]*ent.Product, error) {
	return client.Product.
		Query().
		Where(product.HasCategoryWith(category.NameContains(categoryName))).
		All(context.Background())
}
