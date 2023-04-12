const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./inventory.proto";

const packageDef = protoLoader.loadSync(PROTO_PATH, {});

let fakeInventory = [
    {ownerId: "1", sku: "111",quantity: 100,available: 30,inTransit: 70},
    {ownerId: "2",sku: "222",quantity: 45,available: 21,inTransit: 24},
    {ownerId: "3",sku: "333",quantity: 22,available: 19,inTransit: 3},
    {ownerId: "1",sku: "444",quantity: 17,available: 11,inTransit: 6}
]

const grpcObj = grpc.loadPackageDefinition(packageDef);
const ourServer = new grpc.Server();

ourServer.addService(grpcObj.InventoryService.service,{
    viewInventory: (data, callback) => {
        let inventory = fakeInventory.find(e =>e.sku === data.request.sku)
        
        callback(null, {items:[inventory]});
    },
    decreaseInventory: (data, callback) => {

        fakeInventory.forEach(e => {
            if(e.sku === data.request.sku && e.ownerId === parseInt(data.request.ownerId)){
                e.quantity = parseInt(data.request.quantity)
            }
        })
        callback(null, {message: "Inventory Decreased"})
    },
    addInventory: (data, callback) => {

        fakeInventory.forEach(e => {
            if(e.sku === data.request.sku && e.ownerId === parseInt(data.request.ownerId)){
                e.quantity = parseInt(data.request.quantity)
            }
        })
        callback(null, {message: "Inventory Increased"})
    },
    storeInventory: (data, callback) => {
        callback(null, {message: "Inventory stored"})
    }
})

ourServer.bindAsync("localhost:50051",grpc.ServerCredentials.createInsecure(),
(error, port) => {
    console.log("server running at http://127.0.0.1:50051");
    ourServer.start();
});
