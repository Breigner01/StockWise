package category

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func CreateCategory(client *ent.Client, category *ent.Category) (*ent.Category, error) {
	return client.Category.
		Create().
		SetName(category.Name).
		Save(context.Background())
}
