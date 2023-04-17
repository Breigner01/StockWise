package config

import (
	"database/sql"
	"entgo.io/ent/dialect"
	entsql "entgo.io/ent/dialect/sql"
	"github.com/Breigner01/SOEN487-Project3/productService/ent"
	_ "github.com/lib/pq"
)

func ConnectToDatabase(conf PostgresConfig) *ent.Client {

	db, err := sql.Open("postgres", "postgres://"+"postgres"+":"+"tXPT9vjFXvg5aTRT55kl"+"@"+"containers-us-west-112.railway.app"+":"+
        "8028"+"/"+"railway"+"?sslmode="+"disable")
	if err != nil {
		panic(err)
	}

	// Create an ent.Driver from `db`.
	drv := entsql.OpenDB(dialect.Postgres, db)
	return ent.NewClient(ent.Driver(drv))
}
