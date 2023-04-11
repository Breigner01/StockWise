package product

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func UpdateProduct(client *ent.Client, product *ent.Product) (*ent.Product, error) {
	return client.Product.
		UpdateOne(product).
		Save(context.Background())
}
