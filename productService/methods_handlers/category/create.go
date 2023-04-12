package category

import (
	"context"
	"net"

	"github.com/Breigner01/SOEN487-Project3/productService/config"
	categoryService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/category"
	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	"google.golang.org/grpc"
)

type Server struct {
	listener net.Listener
	core     *grpc.Server
	conf     config.Config
	product.UnimplementedProductServiceServer
	brand.UnimplementedBrandServiceServer
	category.UnimplementedCategoryServiceServer
}

func (s *Server) CreateCategory(ctx context.Context, input *category.Name) (*category.Status, error) {

	err := categoryService.CreateCategory(s.conf, &category.Category{Name: input.GetName()})

	if err != nil {
		return &category.Status{StatusMessage: "Failed to create category"}, err
	}
	return &category.Status{StatusMessage: "Created"}, nil
}
