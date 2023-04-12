package brand

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/brand"
	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
)

func CreateBrand(conf config.Config, b *brand.Brand) error {

	_, err := brandDB.CreateBrand(conf.DB, &ent.Brand{
		Name: b.Name,
	})

	return err
}
