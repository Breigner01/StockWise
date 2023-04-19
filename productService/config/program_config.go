package config

import (
	"github.com/spf13/viper"
)

func GetProgramConfig() ProgramConfig {

	viper.SetConfigName("config")
	viper.AddConfigPath(".")

	viper.SetDefault("port", "5001")

	viper.BindEnv("port", "PORT", "PRODUCT_SERVICE_PORT")
	viper.BindEnv("postgres.user", "POSTGRES_USER", "PRODUCT_SERVICE_POSTGRES_USER")
	viper.BindEnv("postgres.password", "POSTGRES_PASSWORD", "PRODUCT_SERVICE_POSTGRES_PASSWORD")
	viper.BindEnv("postgres.host", "POSTGRES_HOST", "PRODUCT_SERVICE_POSTGRES_HOST")
	viper.BindEnv("postgres.database", "POSTGRES_DB", "PRODUCT_SERVICE_POSTGRES_DB")
	viper.BindEnv("postgres.port", "POSTGRES_PORT", "PRODUCT_SERVICE_POSTGRES_PORT")
	viper.BindEnv("postgres.sslmode", "POSTGRES_SSLMODE", "PRODUCT_SERVICE_POSTGRES_SSLMODE")

	if err := viper.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); !ok {
			panic(err)
		}
	}

	var config ProgramConfig

	err := viper.Unmarshal(&config)
	if err != nil {
		panic(err)
	}

	return config
}
