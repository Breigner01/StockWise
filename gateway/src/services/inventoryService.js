import protoLoader from "@grpc/proto-loader";
import grpc from "@grpc/grpc-js";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let grpcObject = protoLoader.loadSync(
  path.join(__dirname, "../proto/inventory.proto"),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
);

let inventoryService = grpc.loadPackageDefinition(grpcObject).com.example;

const inventoryClient = new inventoryService.InventoryService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

export const getInventory = (sku) => {
  return new Promise((resolve, reject) => {
    inventoryClient.viewInventory({ sku }, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

export const addInventory = (itemRequest) => {
  return new Promise((resolve, reject) => {
    inventoryClient.addInventory(itemRequest, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

export const decreaseInventory = (itemRequest) => {
  return new Promise((resolve, reject) => {
    inventoryClient.decreaseInventory(itemRequest, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

export const storeInventory = (itemRequest) => {
  return new Promise((resolve, reject) => {
    inventoryClient.storeInventory(itemRequest, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
