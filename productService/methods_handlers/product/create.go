package product

import (
	"context"
	"net"
	productService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/product"

	"github.com/Breigner01/SOEN487-Project3/productService/config"
	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	"google.golang.org/grpc"
	// "google.golang.org/grpc"
)

type Server struct {
	listener net.Listener
	core     *grpc.Server
	conf     config.Config
	product.UnimplementedProductServiceServer
	brand.UnimplementedBrandServiceServer
	category.UnimplementedCategoryServiceServer
}

func (s *Server) CreateProduct(ctx context.Context, input *product.Product) (*product.Status, error) {
	
	err := productService.CreateProduct(s.conf, input)

	if err != nil {
		return &product.Status{StatusMessage: "Failed to create product"}, err
	}
	return &product.Status{StatusMessage: "Created"}, nil
}