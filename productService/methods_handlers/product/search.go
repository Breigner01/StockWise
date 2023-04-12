package product

import (
	"context"

	productService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/product"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

func (s *Server) SearchProductByName(ctx context.Context, input *product.Name) (*product.Products, error) {
	p, err := productService.SearchProductsByName(s.conf, input.GetName())
	if err != nil {
		return nil, err
	}
	return &product.Products{ProductsFound: p}, nil
}

func (s *Server) SearchProductByBrand(ctx context.Context, input *product.Brand) (*product.Products, error) {
	p, err := productService.SearchProductsByBrand(s.conf, input.GetBrand())
	if err != nil {
		return nil, err
	}
	return &product.Products{ProductsFound: p}, nil
}

func (s *Server) SearchProductByCategory(ctx context.Context, input *product.Category) (*product.Products, error) {
	p, err := productService.SearchProductsByCategory(s.conf, input.GetCategory())
	if err != nil {
		return nil, err
	}
	return &product.Products{ProductsFound: p}, nil
}
