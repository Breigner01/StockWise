package config

import (
	"github.com/Breigner01/SOEN487-Project3/productService/server"
)

type Config struct {
	Sv *server.Server
}

type ProgramConfig struct {
	Port string
}
