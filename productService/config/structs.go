package config

import (
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	"github.com/Breigner01/SOEN487-Project3/productService/methods_handlers"
)

type PostgresConfig struct {
	Username string `mapstructure:"username"`
	Password string `mapstructure:"password"`
	Host     string `mapstructure:"host"`
	Database string `mapstructure:"database"`
	Port     string `mapstructure:"port"`
	SSLMode  string `mapstructure:"sslmode"`
}

type ProgramConfig struct {
	Port     string         `mapstructure:"port"`
	Postgres PostgresConfig `mapstructure:"postgres"`
}

type Config struct {
	Sv *methods_handlers.Server
	DB *ent.Client
}
