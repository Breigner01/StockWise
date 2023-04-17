package _default

import (
	"fmt"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	categoryDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/category"
	"os"
)

var defaultCategories = []string{
	"Electronics",
	"Books",
	"Movies",
	"Music",
	"Sports",
	"Toys",
	"Home",
	"Industrial",
	"Tools",
	"Grocery",
	"Health",
	"Beauty",
	"Baby",
	"Automotive",
	"Pet",
	"Office",
	"Other",
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
