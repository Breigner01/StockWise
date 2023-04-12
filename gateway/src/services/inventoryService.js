import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let grpcObject = protoLoader.loadSync(
  path.join(__dirname, "./inventory.proto"),
  {}
);

let InventoryService = grpc.loadPackageDefinition(grpcObject).InventoryService;

export const inventoryClient = new InventoryService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

export const getInventory = (sku) => {
  return new Promise((resolve, reject) => {
    inventoryClient.viewInventory({}, (err, inventory) => {
      !err ? resolve(inventory) : resolve(null);
    });
  });
};

export const addInventory = (itemRequest) => {
  return new Promise((resolve, reject) => {
    inventoryClient.addInventory({}, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const decreaseInventory = (itemRequest) => {
  return new Promise((resolve, reject) => {
    inventoryClient.decreaseInventory({}, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};

export const storeInventory = (itemRequest) => {
  return new Promise((resolve, reject) => {
    inventoryClient.storeInventory({}, (err, result) => {
      !err ? resolve(result) : resolve(null);
    });
  });
};
