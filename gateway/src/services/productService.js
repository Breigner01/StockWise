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
  "localhost:50051",
  grpc.credentials.createInsecure()
);

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    productClient.GetProductById({}, (error, result) => {
      if (!err) {
        resolve(result);
      }
    });
  });
};

export const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    productClient.CreateProduct({}, (error, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const getProductByName = (name) => {
  return new Promise((resolve, reject) => {
    productClient.SearchProductByName({}, (error, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const getProductByBrand = (brand) => {
  return new Promise((resolve, reject) => {
    productClient.SearchProductByBrand({}, (error, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const getProductByPrice = (price) => {
  return new Promise((resolve, reject) => {
    productClient.SearchProductByPrice({}, (error, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const updateProduct = (product) => {
  return new Promise((resolve, reject) => {
    productClient.updateProduct({}, (error, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    productClient.DeleteProduct({}, (error, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};
