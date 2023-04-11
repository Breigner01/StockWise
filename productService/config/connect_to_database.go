package config

import (
	"database/sql"
	"entgo.io/ent/dialect"
	entsql "entgo.io/ent/dialect/sql"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	"log"
)

func ConnectToDatabase(conf PostgresConfig) *ent.Client {

	db, err := sql.Open("postgres", "postgres://"+conf.Username+":"+conf.Password+"@"+conf.Host+":"+
		conf.Port+"/"+conf.Database+"?sslmode="+conf.SSLMode)
	if err != nil {
		log.Fatal(err)
	}

	// Create an ent.Driver from `db`.
	drv := entsql.OpenDB(dialect.Postgres, db)
	return ent.NewClient(ent.Driver(drv))
}
