package main

import (
	"fmt"
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"os"
	"os/signal"
)

func main() {

	progConf := config.GetProgramConfig()
	conf := config.GetConfig(progConf)

	quitChannel := make(chan os.Signal, 1)
	signal.Notify(quitChannel, os.Interrupt)

	go func() {

		sig := <-quitChannel
		fmt.Println("Received " + sig.String() + " cleaning up...")

		defer conf.Sv.Stop()
	}()

	err := conf.Sv.Start()
	if err != nil {
		panic(err)
	}

}
