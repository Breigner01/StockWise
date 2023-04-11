package config

import (
	"github.com/Breigner01/SOEN487-Project3/productService/server"
	"net"
)

func GetConfig(conf ProgramConfig) Config {

	listener, err := net.Listen("tcp", ":"+conf.Port)
	if err != nil {
		panic(err)
	}

	return Config{
		Sv: server.New(listener),
		DB: ConnectToDatabase(conf.Postgres),
	}
}
