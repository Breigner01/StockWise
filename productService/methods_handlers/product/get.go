package product

import (
	"context"

	productService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

func (s *Server) GetProductById(ctx context.Context, input *product.Id) (*product.Product, error) {
	p, err := productService.GetProductByID(s.conf, int(input.GetId()))

	if err != nil {
		return nil, err
	}
	return p, nil
}
