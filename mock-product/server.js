const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./product.proto";

const packageDef = protoLoader.loadSync(PROTO_PATH, {});

let fakeProducts = [
    {id: 99,name: "Leather Shoes",brand: "brand5",description: "Mens Leather Shoes by Browns",price: 144.99,category: "Clothing"},
    {id: 89,name: "Yankees Hat",brand: "brand2",description: "It's a hat",price: 24.99,category: "Clothing"},
    {id: 77,name: "Red Sox Hat",brand: "brand2",description: "It's a hat",price: 24.99,category: "Clothing"},
    {id: 66,name: "Running Shoes",brand: "brand3",description: "Some Shoes ",price: 75.99,category: "Clothing"},
    {id: 55,name: "Cotton T-Shirt",brand: "brand1",description: "just a shirt",price: 15.99,category: "Clothing"},
    {id: 44,name: "Cotton Sweater",brand: "brand1",description: "just a sweater",price: 25.99,category: "Clothing"},
    {id: 33,name: "Blue Jeans",brand: "brand4",description: "just jeans",price: 28.99,category: "Clothing"},
    {id: 22,name: "Black Jeans",brand: "brand4",description: "more just jeans",price: 34.99,category: "Clothing"},
    {id: 11,name: "Grey Joggers",brand: "brand2",description: "some pants stuff",price: 43.99,category: "Clothing"},
    {id: 01,name: "Yellow Long Sleeve",brand: "brand1",description: "long boy ",price: 19.99,category: "Clothing"},

]

const grpcObj = grpc.loadPackageDefinition(packageDef);
const ourServer = new grpc.Server();

ourServer.addService(grpcObj.ProductService.service,{
    CreateProduct: (data, callback) => {
        
        product = data.request
        product.id = parseInt(product.id)
        fakeProducts.push(product)
        console.log(fakeProducts)
        callback(null, {statusMessage: "Success!"});
    },
    GetProductById: (data, callback) => {

        const result = fakeProducts.find( e => e.id === parseInt(data.request.id))
        callback(null, result)
    },
    SearchProductByName: (data, callback) => {
        
        if(data.request.name == ""){
            console.log(data.request)
            callback(null, {productsFound: fakeProducts})
        }else{
            callback(null,{productsFound: fakeProducts.filter(e => e.name === data.request.name)} );
        }
      
    },
    SearchProductByPrice: (data, callback) => {
        callback(null, {productsFound: fakeProducts.filter(e => e.price === data.request.price)})
    },
    SearchProductByBrand: (data, callback) => {
   
        products = fakeProducts.filter(e => e.brand === data.request.brand)
        console.log(products)
        callback(null, {productsFound: products })
    },
    UpdateProduct: (data, callback) => {
        let product = data.requestbr
        product.id = parseInt(product.id)
        fakeProducts.forEach( e => {
            if(e.id == product.id){
                e.brand = product.brand;
                e.name = product.name;
                e.category = product.category;
                e.price = product.price;
                e.description = product.description;
                   
        }
        callback(null, {statusMessage: "Success!"})
    })
    },
    DeleteProduct: (data, callback) => {
        let productId = data.request.id
        fakeProducts = fakeProducts.filter(e => e.id !== productId);
        callback(null, {statusMessage: "Success!"})
    }
})

ourServer.bindAsync("localhost:50052",grpc.ServerCredentials.createInsecure(),
(error, port) => {
    console.log("server running at http://127.0.0.1:50052");
    ourServer.start();
});