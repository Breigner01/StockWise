FROM golang:1.20.2-alpine3.17 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -o productService

FROM alpine:3.17.3 AS runner

WORKDIR /app

COPY --from=builder /app/productService .

CMD ["./productService"]