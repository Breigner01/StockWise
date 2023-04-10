package config

import (
	"github.com/Breigner01/SOEN487-Project3/productService/server"
)

type ProgramConfig struct {
	Port string `mapstructure:"port"`
}

type Config struct {
	Sv *server.Server
}
