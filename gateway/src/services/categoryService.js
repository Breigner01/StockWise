import protoLoader from "@grpc/proto-loader";
import grpc from "@grpc/grpc-js";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let grpcObject = protoLoader.loadSync(
  path.join(__dirname, "../proto/category.proto"),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

var categoryservice = grpc.loadPackageDefinition(grpcObject).category;
var categoryClient = new categoryservice.CategoryService(
  "localhost:5001",
  grpc.credentials.createInsecure()
);

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    categoryClient.GetAllCategories({}, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

export const createCategory = (name) => {
  return new Promise((resolve, reject) => {
    categoryClient.CreateCategory({ name }, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

export const deleteCategory = (category) => {
  return new Promise((resolve, reject) => {
    categoryClient.DeleteCategory(category, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

export const updateCategory = (category) => {
  return new Promise((resolve, reject) => {
    categoryClient.UpdateCategory(category, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
