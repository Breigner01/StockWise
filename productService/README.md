# Product Service

This service is responsible for managing products.

It spawns a gRPC server that listens on port 5001 by default.

## Build & Run

### Docker

```shell
docker build -t product-service:latest -t product-service:$(git describe --tags HEAD) .
docker run -p "5001:5001" -e PORT=5001 product-service:latest
```

### Native

```shell
go build -o product-service
./product-service
```

## Structure

This services contains the following packages:
- [config](#config): contains the configuration for the service
- [product](#product): contains the gRPC server and the gRPC client
- [server](#server): contains the gRPC server implementation

### config

The configuration for the service is stored in the config package. 
It uses the [viper](https://github.com/spf13/viper) package to load the configuration from a file or the environment.

See: [config](config)

### product

The product package contains the gRPC server and the gRPC client.

See: [product](product)

### server

The `server` package contains the gRPC server listener.

See: [server](server)
