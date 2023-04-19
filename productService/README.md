# Product Service

This service is responsible for managing products.

It spawns a gRPC server that listens on port 5001 by default.

## Configuration

The configuration can be set using a config file or environment variables.

### Config file

The supported config file formats are: `json`, `toml`, `yaml`, `yml`, `properties`, `props`, `prop`, `hcl`, `dotenv`, 
`env`, `ini`.

The config file needs to be named `config` with one of the extensions specified above and located in the same 
directory as the executable.

Here is a sample config file in json:

```json
{
  "port": 5001,
  "postgres": {
    "user": "postgres",
    "password": "postgres",
    "host": "localhost",
    "port": 5432,
    "database": "postgres",
    "sslmode": "disable"
  }
}
```

### Environment variables

The environment variables can be set with the prefix `PRODUCT_SERVICE_` and the name of the variable in uppercase or 
just the name of the variable in uppercase.

Here is a list of all supported environment variables:

| Name              | Description                             | Default   |
|-------------------|-----------------------------------------|-----------|
| PORT              | The port the gRPC server listens on     | 5001      |
| POSTGRES_USER     | The user to connect to the database     | postgres  |
| POSTGRES_PASSWORD | The password to connect to the database | postgres  |
| POSTGRES_HOST     | The host of the database                | localhost |
| POSTGRES_PORT     | The port of the database                | 5432      |
| POSTGRES_DATABASE | The database to connect to              | postgres  |
| POSTGRES_SSLMODE  | The sslmode to connect to the database  | disable   |

## Build & Run

### Docker

```shell
docker build -t soen487-project3/product-service:latest -t soen487-project3/product-service:$(git describe --tags HEAD) .

# Don't forget to set the environment variables using `-e`
docker run -p "5001:5001" soen487-project3/product-service:latest
```

### Native

```shell
go build -o productService
./productService
```

## Structure

This services contains the following packages:
- [client](#client): contains a gRPC client for test purposes
- [config](#config): contains the configuration for the service
- [ent](#ent): contains the database schema and functions using ent
- [message_broker](#message_broker): contains the functions to interact with the message broker
- [methods_database](#methods_database): contains the functions to interact with the database
- [methods_handlers](#methods_handlers): contains the grpc handlers
- [methods_services](#methods_services): contains the different services
- [pb](#pb): contains the protobuf files and gRPC server

### client

The client package contains a gRPC client for test purposes.

See: [client](client)

### config

The configuration for the service is stored in the config package.
It uses the [viper](https://github.com/spf13/viper) package to load the configuration from a file or the environment.

See: [config](config)

### ent

The ent package contains the database schema and functions using ent.

See: [ent](ent)

### message_broker

The message_broker package contains the functions to interact with the message broker.

See: [message_broker](message_broker)

### methods_database

The methods_database package contains the functions to interact with the database.

See: [methods_database](methods_database)

### methods_handlers

The methods_handlers package contains the grpc handlers.

See: [methods_handlers](methods_handlers)

### methods_services

The methods_services package contains the different services which contain the entire logic of the product service.

See: [methods_services](methods_services)

### pb

The pb package contains the protobuf files and gRPC server.
Each service has its own package.

See: [pb](pb)
