package main

import (
	"context"
	"fmt"
	"github.com/Breigner01/SOEN487-Project3/productService/config"
	"github.com/Breigner01/SOEN487-Project3/productService/ent/migrate"
	"os"
	"os/signal"
)

func main() {

	progConf := config.GetProgramConfig()
	conf := config.GetConfig(progConf)

	err := conf.DB.Schema.Create(
		context.Background(),
		migrate.WithDropColumn(true),
		migrate.WithDropIndex(true),
	)
	if err != nil {
		panic(err)
	}

	quitChannel := make(chan os.Signal, 1)
	signal.Notify(quitChannel, os.Interrupt)

	go func() {

		sig := <-quitChannel
		fmt.Println("Received " + sig.String() + " cleaning up...")

		defer conf.Sv.Stop()
	}()

	err = conf.Sv.Start()
	if err != nil {
		panic(err)
	}

}
