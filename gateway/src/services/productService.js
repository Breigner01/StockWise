import protoLoader from "@grpc/proto-loader";
import grpc from "@grpc/grpc-js";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let grpcObject = protoLoader.loadSync(
  path.join(__dirname, "./product.proto"),{keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
   });

var productservice = grpc.loadPackageDefinition(grpcObject).product;
var productClient = new productservice.ProductService('localhost:5001',grpc.credentials.createInsecure())




export const getProducts = () => {
  return new Promise((resolve, reject) => {
    productClient.SearchProductByName({name: ""}, (err, result) => {
      err ? resolve(err) : resolve(result);

    });
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    productClient.GetProductById({id}, (err, result) => {
      err ? resolve(err) : resolve(result);

    });
  });
};

export const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    productClient.CreateProduct(product, (err, result) => {
      err ? resolve(err) : resolve(result);
    });
  });
};

export const getProductsByName = (name) => {
  return new Promise( (resolve, reject) => {
  productClient.SearchProductByName({"name":name}, (err, result) => {
    err ? resolve(err) : resolve(result);

    });
  });
};

export const getProductsByBrand = (brand) => {
  return new Promise((resolve, reject) => {
    console.log(brand)
    productClient.SearchProductByBrand({brand}, (err, result) => {
      err ? resolve(err) : resolve(result);

    });
  });
};

export const getProductsByPrice = (price) => {
  return new Promise((resolve, reject) => {
    productClient.SearchProductByPrice({price}, (err, result) => {
      err ? resolve(err) : resolve(result);

    });
  });
};

export const updateProduct = (product) => {
  return new Promise((resolve, reject) => {
    productClient.updateProduct(product, (err, result) => {
      console.log(result)
      err ? resolve(err) : resolve(result);
    });
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    productClient.DeleteProduct({id}, (err, result) => {
      err ? resolve(err) : resolve(result);
    });
  });
};
