package methods_handlers

import (
	"context"
	productService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

func (s *Server) CreateProduct(ctx context.Context, input *product.Product) (*product.Product, error) {

	p, err := productService.CreateProduct(s.conf, input)

	if err != nil {
		return nil, err
	}
	return p, nil
}
