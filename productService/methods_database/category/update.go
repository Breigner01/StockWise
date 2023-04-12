package category

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func UpdateCategory(client *ent.Client, category *ent.Category) (*ent.Category, error) {
	return client.Category.
		UpdateOne(category).
		Save(context.Background())
}
