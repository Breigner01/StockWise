const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./inventory.proto";

const packageDef = protoLoader.loadSync(PROTO_PATH, {});

let fakeInventory = [
    {ownerId: "1",SKU: "111",quantity: 100,available: 30,inTransit: 70},
    {ownerId: "2",SKU: "222",quantity: 45,available: 21,inTransit: 24},
    {ownerId: "3",SKU: "333",quantity: 22,available: 19,inTransit: 3},
    {ownerId: "1",SKU: "444",quantity: 17,available: 11,inTransit: 6}
]

const grpcObj = grpc.loadPackageDefinition(packageDef);
const ourServer = new grpc.Server();

ourServer.addService(grpcObj.InventoryService.service,{
    viewInventory: (InventoryRequest, callback) => {
        
        callback(null, {items:fakeInventory});
    },
    decreaseInventory: (ItemRequest, callback) => {
        callback(null, "Decreased Item!")
    },
    addInventory: (ItemRequest, callback) => {
        callback(null, "Added Item!")
    },
    storeInventory: (ItemRequest, callback) => {
        callback(null, "Stored Inventory!")
    }
})

ourServer.bindAsync("localhost:50051",grpc.ServerCredentials.createInsecure(),
(error, port) => {
    console.log("server running at http://127.0.0.1:50051");
    ourServer.start();
});
