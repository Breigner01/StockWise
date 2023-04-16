package product

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/product"
)

func GetProductByID(client *ent.Client, id int) (*ent.Product, error) {
	return client.Product.
		Query().
		Where(product.ID(id)).
		WithBrand().
		WithCategory().
		Only(context.Background())
}

func GetAllProducts(client *ent.Client) ([]*ent.Product, error) {
	return client.Product.
		Query().
		WithBrand().
		WithCategory().
		All(context.Background())
}
