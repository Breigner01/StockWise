package main

import "github.com/Breigner01/SOEN487-Project3/productService/config"

func main() {

	progConf := config.GetProgramConfig()
	conf := config.GetConfig(progConf)

	err := conf.sv.Start()
	if err != nil {
		panic(err)
	}

}
