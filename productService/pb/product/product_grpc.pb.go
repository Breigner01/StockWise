// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: pb/product/product.proto

package __

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ProductServiceClient is the client API for ProductService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProductServiceClient interface {
	CreateProduct(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Status, error)
	GetProductById(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Product, error)
	GetAllProducts(ctx context.Context, in *NoParam, opts ...grpc.CallOption) (*Products, error)
	// returns list of products
	SearchProductByName(ctx context.Context, in *Name, opts ...grpc.CallOption) (*Products, error)
	SearchProductByBrand(ctx context.Context, in *Brand, opts ...grpc.CallOption) (*Products, error)
	SearchProductByCategory(ctx context.Context, in *Category, opts ...grpc.CallOption) (*Products, error)
	UpdateProduct(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Status, error)
	DeleteProduct(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Status, error)
}

type productServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewProductServiceClient(cc grpc.ClientConnInterface) ProductServiceClient {
	return &productServiceClient{cc}
}

func (c *productServiceClient) CreateProduct(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Status, error) {
	out := new(Status)
	err := c.cc.Invoke(ctx, "/product.ProductService/CreateProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) GetProductById(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Product, error) {
	out := new(Product)
	err := c.cc.Invoke(ctx, "/product.ProductService/GetProductById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) GetAllProducts(ctx context.Context, in *NoParam, opts ...grpc.CallOption) (*Products, error) {
	out := new(Products)
	err := c.cc.Invoke(ctx, "/product.ProductService/GetAllProducts", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) SearchProductByName(ctx context.Context, in *Name, opts ...grpc.CallOption) (*Products, error) {
	out := new(Products)
	err := c.cc.Invoke(ctx, "/product.ProductService/SearchProductByName", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) SearchProductByBrand(ctx context.Context, in *Brand, opts ...grpc.CallOption) (*Products, error) {
	out := new(Products)
	err := c.cc.Invoke(ctx, "/product.ProductService/SearchProductByBrand", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) SearchProductByCategory(ctx context.Context, in *Category, opts ...grpc.CallOption) (*Products, error) {
	out := new(Products)
	err := c.cc.Invoke(ctx, "/product.ProductService/SearchProductByCategory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) UpdateProduct(ctx context.Context, in *Product, opts ...grpc.CallOption) (*Status, error) {
	out := new(Status)
	err := c.cc.Invoke(ctx, "/product.ProductService/UpdateProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *productServiceClient) DeleteProduct(ctx context.Context, in *Id, opts ...grpc.CallOption) (*Status, error) {
	out := new(Status)
	err := c.cc.Invoke(ctx, "/product.ProductService/DeleteProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProductServiceServer is the server API for ProductService service.
// All implementations must embed UnimplementedProductServiceServer
// for forward compatibility
type ProductServiceServer interface {
	CreateProduct(context.Context, *Product) (*Status, error)
	GetProductById(context.Context, *Id) (*Product, error)
	GetAllProducts(context.Context, *NoParam) (*Products, error)
	// returns list of products
	SearchProductByName(context.Context, *Name) (*Products, error)
	SearchProductByBrand(context.Context, *Brand) (*Products, error)
	SearchProductByCategory(context.Context, *Category) (*Products, error)
	UpdateProduct(context.Context, *Product) (*Status, error)
	DeleteProduct(context.Context, *Id) (*Status, error)
	mustEmbedUnimplementedProductServiceServer()
}

// UnimplementedProductServiceServer must be embedded to have forward compatible implementations.
type UnimplementedProductServiceServer struct {
}

func (UnimplementedProductServiceServer) CreateProduct(context.Context, *Product) (*Status, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProduct not implemented")
}
func (UnimplementedProductServiceServer) GetProductById(context.Context, *Id) (*Product, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProductById not implemented")
}
func (UnimplementedProductServiceServer) GetAllProducts(context.Context, *NoParam) (*Products, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAllProducts not implemented")
}
func (UnimplementedProductServiceServer) SearchProductByName(context.Context, *Name) (*Products, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SearchProductByName not implemented")
}
func (UnimplementedProductServiceServer) SearchProductByBrand(context.Context, *Brand) (*Products, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SearchProductByBrand not implemented")
}
func (UnimplementedProductServiceServer) SearchProductByCategory(context.Context, *Category) (*Products, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SearchProductByCategory not implemented")
}
func (UnimplementedProductServiceServer) UpdateProduct(context.Context, *Product) (*Status, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProduct not implemented")
}
func (UnimplementedProductServiceServer) DeleteProduct(context.Context, *Id) (*Status, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteProduct not implemented")
}
func (UnimplementedProductServiceServer) mustEmbedUnimplementedProductServiceServer() {}

// UnsafeProductServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProductServiceServer will
// result in compilation errors.
type UnsafeProductServiceServer interface {
	mustEmbedUnimplementedProductServiceServer()
}

func RegisterProductServiceServer(s grpc.ServiceRegistrar, srv ProductServiceServer) {
	s.RegisterService(&ProductService_ServiceDesc, srv)
}

func _ProductService_CreateProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Product)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).CreateProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.ProductService/CreateProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).CreateProduct(ctx, req.(*Product))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_GetProductById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).GetProductById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.ProductService/GetProductById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).GetProductById(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_GetAllProducts_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NoParam)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).GetAllProducts(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.ProductService/GetAllProducts",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).GetAllProducts(ctx, req.(*NoParam))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_SearchProductByName_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Name)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).SearchProductByName(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.ProductService/SearchProductByName",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).SearchProductByName(ctx, req.(*Name))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_SearchProductByBrand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Brand)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).SearchProductByBrand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.ProductService/SearchProductByBrand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).SearchProductByBrand(ctx, req.(*Brand))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_SearchProductByCategory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Category)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).SearchProductByCategory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.ProductService/SearchProductByCategory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).SearchProductByCategory(ctx, req.(*Category))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_UpdateProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Product)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).UpdateProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.ProductService/UpdateProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).UpdateProduct(ctx, req.(*Product))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProductService_DeleteProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Id)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProductServiceServer).DeleteProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/product.ProductService/DeleteProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProductServiceServer).DeleteProduct(ctx, req.(*Id))
	}
	return interceptor(ctx, in, info, handler)
}

// ProductService_ServiceDesc is the grpc.ServiceDesc for ProductService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ProductService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "product.ProductService",
	HandlerType: (*ProductServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateProduct",
			Handler:    _ProductService_CreateProduct_Handler,
		},
		{
			MethodName: "GetProductById",
			Handler:    _ProductService_GetProductById_Handler,
		},
		{
			MethodName: "GetAllProducts",
			Handler:    _ProductService_GetAllProducts_Handler,
		},
		{
			MethodName: "SearchProductByName",
			Handler:    _ProductService_SearchProductByName_Handler,
		},
		{
			MethodName: "SearchProductByBrand",
			Handler:    _ProductService_SearchProductByBrand_Handler,
		},
		{
			MethodName: "SearchProductByCategory",
			Handler:    _ProductService_SearchProductByCategory_Handler,
		},
		{
			MethodName: "UpdateProduct",
			Handler:    _ProductService_UpdateProduct_Handler,
		},
		{
			MethodName: "DeleteProduct",
			Handler:    _ProductService_DeleteProduct_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pb/product/product.proto",
}
