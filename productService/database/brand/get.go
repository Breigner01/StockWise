package brand

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/brand"
)

func GetByID(client *ent.Client, id int) (*ent.Brand, error) {
	return client.Brand.
		Query().
		Where(brand.ID(id)).
		Only(context.Background())
}

func GetByName(client *ent.Client, name string) (*ent.Brand, error) {
	return client.Brand.
		Query().
		Where(brand.Name(name)).
		Only(context.Background())
}
