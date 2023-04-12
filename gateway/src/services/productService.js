import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let grpcObject = protoLoader.loadSync(
  path.join(__dirname, "./product.proto"),
  {}
);

let ProductService = grpc.loadPackageDefinition(grpcObject).ProductService;

export const productClient = new ProductService(
  "localhost:50052",
  grpc.credentials.createInsecure()
);

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    productClient.SearchProductByName({name: ""}, (err, result) => {
      console.log(err)
      console.log(result)
      if (!err) {
        resolve(result);
      }
    });
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    productClient.GetProductById({id}, (err, result) => {
      console.log(err)
      if (!err) {
        resolve(result);
      }
    });
  });
};

export const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    productClient.CreateProduct(product, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const getProductsByName = (name) => {
  return new Promise((resolve, reject) => {
    productClient.SearchProductByName({name}, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const getProductsByBrand = (brand) => {
  return new Promise((resolve, reject) => {
    console.log(brand)
    productClient.SearchProductByBrand({brand}, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const getProductsByPrice = (price) => {
  return new Promise((resolve, reject) => {
    productClient.SearchProductByPrice({price}, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const updateProduct = (product) => {
  return new Promise((resolve, reject) => {
    productClient.updateProduct(product, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    productClient.DeleteProduct({id}, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};
