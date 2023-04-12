package product

import (
	"context"

	productService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

func (s *Server) UpdateProduct(ctx context.Context, input *product.Product) (*product.Status, error) {
	err := productService.UpdateProduct(s.conf, input)

	if err != nil {
		return &product.Status{StatusMessage: "Failed to Update product"}, err
	}
	return &product.Status{StatusMessage: "Updated"}, nil
}
