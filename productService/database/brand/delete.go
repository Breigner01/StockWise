package brand

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func DeleteBrand(client *ent.Client, brand *ent.Brand) error {
	return client.Brand.
		DeleteOne(brand).
		Exec(context.Background())
}
