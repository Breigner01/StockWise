package product

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func CreateProduct(client *ent.Client, product *ent.Product) (*ent.Product, error) {

	return client.Product.
		Create().
		SetName(product.Name).
		SetPrice(product.Price).
		SetDescription(product.Description).
		SetBrand(product.Edges.Brand).
		SetCategory(product.Edges.Category).
		Save(context.Background())
}
