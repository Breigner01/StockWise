package brand

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/methods_database/brand"
	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
)

func UpdateBrand(conf config.Config, b *brand.Brand) error {

	_, err := brandDB.UpdateBrand(conf.DB, &ent.Brand{
		ID:   int(b.Id),
		Name: b.Name,
	})

	return err
}
