package product

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func UpdateProduct(client *ent.Client, product *ent.Product) (*ent.Product, error) {
	return client.Product.
		UpdateOne(product).
		SetName(product.Name).
		SetDescription(product.Description).
		SetPrice(product.Price).
		SetBrand(product.Edges.Brand).
		SetCategory(product.Edges.Category).
		Save(context.Background())
}
