package brand

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/database/brand"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
)

func UpdateBrand(conf config.Config, b *brand.Brand) error {

	_, err := brandDB.UpdateBrand(conf.DB, &ent.Brand{
		ID:   int(b.Id),
		Name: b.Name,
	})

	return err
}
