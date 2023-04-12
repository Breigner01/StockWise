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
		Only(context.Background())
}
