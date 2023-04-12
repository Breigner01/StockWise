package brand

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func CreateBrand(client *ent.Client, brand *ent.Brand) (*ent.Brand, error) {
	return client.Brand.
		Create().
		SetName(brand.Name).
		Save(context.Background())
}
