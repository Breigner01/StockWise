package product

import (
	"context"
	"github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	// "google.golang.org/grpc"
)

type ProductServiceServer struct {
	__.UnimplementedProductServiceServer
}

// receiver fx
func (s *ProductServiceServer) CreateProduct(ctx context.Context, input *__.Product) (*__.Status, error) {
	// log.Printf("Server Received Product:\nNAME: %v\nBRAND: %v\nCATEGORY: %v\nPRICE: %v\nDESCRIPTION: %v\n\n",
	// 					input.GetName(), input.GetBrand(), input.GetCategory(), input.GetPrice(), input.GetDescription())

	// call service method to write to db (service method calls db method)
	// 		^takes Product obj, returns Status --- if success return success satus
	// 									 --- if fail return fail status

	var status = "\n\nthis is status\n\n" // status will = status message that will be returned from db method
	return &__.Status{StatusMessage: status}, nil
}
