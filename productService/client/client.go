package client

import (
	product "github.com/Breigner01/SOEN487-Project3/productService/pb/product"
	"google.golang.org/grpc"
)

type Client struct {
	conn *grpc.ClientConn
	core product.ProductServiceClient
}

func New(conn *grpc.ClientConn) *Client {

	core := product.NewProductServiceClient(conn)
	conn.Connect()

	return &Client{
		conn,
		core,
	}
}

func (c *Client) Disconnect() error {
	return c.conn.Close()
}
