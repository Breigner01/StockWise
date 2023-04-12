package methods_handlers

import (
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"net"

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

func New(listener net.Listener, conf config.Config) *Server {

	core := grpc.NewServer()
	var sv = &Server{
		listener,
		core,
		conf,
		product.UnimplementedProductServiceServer{},
		brand.UnimplementedBrandServiceServer{},
		category.UnimplementedCategoryServiceServer{},
	}

	product.RegisterProductServiceServer(core, sv)
	brand.RegisterBrandServiceServer(core, sv)
	category.RegisterCategoryServiceServer(core, sv)

	return sv
}

func (s *Server) Start() error {
	return s.core.Serve(s.listener)
}

func (s *Server) Stop() {
	s.core.Stop()
}
