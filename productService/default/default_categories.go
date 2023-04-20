package _default

import (
	"fmt"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
	"os"
)

var defaultCategories = []string{
	"Apparel and Accessories",
	"Automotive",
	"Books & Movies & Music",
	"Baby",
	"Electronics",
	"Health & Beauty",
	"Home & Garden",
	"Industrial",
	"Sports & Fitness",
	"Food & Beverage",
	"Office",
	"Other",
	"Pet",
	"Tools",
	"Toys and Games",
}

func CreateDefaultCategories(client *ent.Client) {

	for _, category := range defaultCategories {
		_, err := categoryDB.CreateCategory(client, &ent.Category{
			Name: category,
		})
		if err != nil {
			if !ent.IsConstraintError(err) {
				fmt.Fprintf(os.Stderr, "Error creating default category: %s, %s\n", category, err.Error())
			}
		}
	}
}
