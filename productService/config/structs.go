package config

import (
	"github.com/Breigner01/SOEN487-Project3/productService/server"
)

type Config struct {
	sv *server.Server
}

type ProgramConfig struct {
	Port string
}
