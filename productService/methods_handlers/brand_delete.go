package methods_handlers

import (
	"context"

	brandService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/brand"
	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
	// product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
)

func (s *Server) DeleteBrand(ctx context.Context, input *brand.Brand) (*brand.Status, error) {

	err := brandService.DeleteBrand(s.conf, int(input.GetId()))

	if err != nil {
		return &brand.Status{StatusMessage: "Failed to delete brand"}, err
	}
	return &brand.Status{StatusMessage: "Deleted"}, nil
}
