package methods_handlers

import (
	"net"

	brand "github.com/Breigner01/SOEN487-Project3/productService/pb/brand"
	category "github.com/Breigner01/SOEN487-Project3/productService/pb/category"
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	"google.golang.org/grpc"
)

type Server struct {
	listener net.Listener
	core     *grpc.Server
	product.UnimplementedProductServiceServer
	brand.UnimplementedBrandServiceServer
	category.UnimplementedCategoryServiceServer
}

func New(listener net.Listener) *Server {

	core := grpc.NewServer()

	product.RegisterProductServiceServer(core, &Server{})

	return &Server{
		listener,
		core,
		product.UnimplementedProductServiceServer{},
		brand.UnimplementedBrandServiceServer{},
		category.UnimplementedCategoryServiceServer{},
	}
}

func (s *Server) Start() error {
	return s.core.Serve(s.listener)
}

func (s *Server) Stop() {
	s.core.Stop()
}
