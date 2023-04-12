package product

import (
	"context"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

func (s *ProductServiceServer) SearchProductByName(ctx context.Context, in *product.Name) (*product.Products, error) {

	// call service method
	// pass in -> in.GetId()
	// returns -> product obj

	var p *product.Products

	return p, nil
}

func (s *ProductServiceServer) SearchProductByPrice(ctx context.Context, in *product.Price) (*product.Products, error) {

	// call service method
	// pass in -> in.GetId()
	// returns -> product obj

	var p *product.Products

	return p, nil
}

func (s *ProductServiceServer) SearchProductByBrand(ctx context.Context, in *product.Brand) (*product.Products, error) {

	// call service method
	// pass in -> in.GetId()
	// returns -> product obj

	var p *product.Products

	return p, nil
}
