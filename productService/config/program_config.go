package config

import "github.com/spf13/viper"

func GetProgramConfig() ProgramConfig {

	viper.SetConfigName("config")
	viper.AddConfigPath(".")

	viper.SetDefault("port", "5001")

	viper.BindEnv("port", "PORT", "PRODUCT_SERVICE_PORT")
	viper.BindEnv("postgres.username", "POSTGRES_USER")
	viper.BindEnv("postgres.password", "POSTGRES_PASSWORD")
	viper.BindEnv("postgres.host", "POSTGRES_HOST")
	viper.BindEnv("postgres.database", "POSTGRES_DB")
	viper.BindEnv("postgres.port", "POSTGRES_PORT")
	viper.BindEnv("postgres.sslmode", "POSTGRES_SSLMODE")

	var config ProgramConfig

	err := viper.Unmarshal(&config)
	if err != nil {
		panic(err)
	}

	return config
}
