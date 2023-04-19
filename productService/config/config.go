package config

func GetConfig(conf ProgramConfig) Config {

	return Config{
		DB: ConnectToDatabase(conf.Postgres),
	}
}
