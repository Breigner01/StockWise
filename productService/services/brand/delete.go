package brand

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	brandDB "github.com/Breigner01/SOEN487-Project3/productService/database/brand"
)

func DeleteBrand(conf config.Config, id int) error {

	b, err := brandDB.GetByID(conf.DB, id)
	if err != nil {
		return err
	}

	return brandDB.DeleteBrand(conf.DB, b)
}
