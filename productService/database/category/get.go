package category

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func GetAllCategories(client *ent.Client) ([]*ent.Category, error) {
	return client.Category.
		Query().
		All(context.Background())
}
