package category

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/category"
)

func GetByID(client *ent.Client, id int) (*ent.Category, error) {
	return client.Category.
		Query().
		Where(category.ID(id)).
		Only(context.Background())
}

func GetByName(client *ent.Client, name string) (*ent.Category, error) {
	return client.Category.
		Query().
		Where(category.Name(name)).
		Only(context.Background())
}

func GetAllCategories(client *ent.Client) ([]*ent.Category, error) {
	return client.Category.
		Query().
		All(context.Background())
}
