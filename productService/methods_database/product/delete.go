package product

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func DeleteProduct(client *ent.Client, product *ent.Product) error {
	return client.Product.
		DeleteOne(product).
		Exec(context.Background())
}
