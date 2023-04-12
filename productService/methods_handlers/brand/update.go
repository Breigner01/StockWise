package brand

import (
	"context"
	brandService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/brand"
	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
	// product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
)

func (s *Server) UpdateBrand(ctx context.Context, input *brand.Brand) (*brand.Status, error) {

	err := brandService.UpdateBrand(s.conf, input)

	if err != nil {
		return &brand.Status{StatusMessage: "Failed to update brand"}, err
	}
	return &brand.Status{StatusMessage: "Updated"}, nil
}