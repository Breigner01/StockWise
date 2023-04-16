package product

import (
	"context"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

func (s *ProductServiceServer) GetProductById(ctx context.Context, in *product.Id) (*product.Product, error) {

	// call service method
	// pass in -> in.GetId()
	// returns -> product obj

	var p *product.Product

	return p, nil
}
