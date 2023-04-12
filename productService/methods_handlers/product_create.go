package methods_handlers

import (
	"context"
	productService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

func (s *Server) CreateProduct(ctx context.Context, input *product.Product) (*product.Status, error) {

	err := productService.CreateProduct(s.conf, input)

	if err != nil {
		return &product.Status{StatusMessage: "Failed to create product"}, err
	}
	return &product.Status{StatusMessage: "Created"}, nil
}
