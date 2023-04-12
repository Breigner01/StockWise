package category

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func DeleteCategory(client *ent.Client, category *ent.Category) error {
	return client.Category.
		DeleteOne(category).
		Exec(context.Background())
}
