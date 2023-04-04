package config

import "github.com/spf13/viper"

func GetProgramConfig() ProgramConfig {

	viper.SetConfigName("config")
	viper.AddConfigPath(".")

	viper.SetDefault("port", "5001")

	viper.BindEnv("port", "PORT", "PRODUCT_SERVICE_PORT")

	var config ProgramConfig

	err := viper.Unmarshal(&config)
	if err != nil {
		panic(err)
	}

	return config
}
