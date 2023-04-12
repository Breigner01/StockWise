package product

import (
	"context"
	product "github.com/Breigner01/SOEN487-Project3/productService/product"
	// "google.golang.org/grpc"
)


func (s *ProductServiceServer) UpdateProduct(ctx context.Context, in *product.Product) (*product.Status, error){

	// call service method
	// pass in -> in.GetId() 
	// returns -> product obj

	var p *product.Status

	return p, nil
}
