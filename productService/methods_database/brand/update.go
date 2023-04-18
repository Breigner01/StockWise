package brand

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func UpdateBrand(client *ent.Client, brand *ent.Brand) (*ent.Brand, error) {
	return client.Brand.
		UpdateOne(brand).
		Save(context.Background())
}
