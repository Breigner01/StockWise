package methods_handlers

import (
	"context"
	brandService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/brand"
	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
)

func (s *Server) CreateBrand(ctx context.Context, input *brand.Name) (*brand.Status, error) {

	err := brandService.CreateBrand(s.conf, &brand.Brand{Name: input.GetName()})

	if err != nil {
		return &brand.Status{StatusMessage: "Failed to create brand"}, err
	}
	return &brand.Status{StatusMessage: "Created"}, nil
}
