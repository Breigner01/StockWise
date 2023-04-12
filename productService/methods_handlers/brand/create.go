package brand

import (
	"context"
	"net"

	"github.com/Breigner01/SOEN487-Project3/productService/config"
	brandService "github.com/Breigner01/SOEN487-Project3/productService/methods_services/brand"
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

func (s *Server) CreateBrand(ctx context.Context, input *brand.Name) (*brand.Status, error) {

	err := brandService.CreateBrand(s.conf, &brand.Brand{Name: input.GetName()})

	if err != nil {
		return &brand.Status{StatusMessage: "Failed to create brand"}, err
	}
	return &brand.Status{StatusMessage: "Created"}, nil
}
