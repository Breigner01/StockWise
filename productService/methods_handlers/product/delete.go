package product

import (
	"context"
	productService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

func (s *Server) DeleteProduct(ctx context.Context, input *product.Id) (*product.Status, error) {

	err := productService.DeleteProduct(s.conf, int(input.GetId()))

	if err != nil {
		return &product.Status{StatusMessage: "Failed to delete product"}, err
	}
	return &product.Status{StatusMessage: "Deleted"}, nil
}
