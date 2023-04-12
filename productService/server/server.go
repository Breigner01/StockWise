package server

import (
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	"google.golang.org/grpc"
	"net"
)

type Server struct {
	listener net.Listener
	core     *grpc.Server
	product.UnimplementedProductServiceServer
}

func New(listener net.Listener) *Server {

	core := grpc.NewServer()

	product.RegisterProductServiceServer(core, &Server{})

	return &Server{
		listener,
		core,
		product.UnimplementedProductServiceServer{},
	}
}

func (s *Server) Start() error {
	return s.core.Serve(s.listener)
}

func (s *Server) Stop() {
	s.core.Stop()
}
