package brand

import (
	brand "github.com/Breigner01/SOEN487-Project3/productService/brand"
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/database/brand"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
)

func CreateBrand(conf config.Config, b *brand.Brand) error {

	_, err := brandDB.CreateBrand(conf.DB, &ent.Brand{
		Name: b.Name,
	})

	return err
}
