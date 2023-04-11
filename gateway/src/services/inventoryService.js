import * as protoLoader from '@grpc/proto-loader';
import * as grpc from "@grpc/grpc-js"
import * as path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let grpcObject = protoLoader.loadSync(path.join(__dirname, './inventory.proto'), {});

let InventoryService = grpc.loadPackageDefinition(grpcObject).InventoryService;


const inventoryClient = new InventoryService("localhost:50051",grpc.credentials.createInsecure());

export default inventoryClient;