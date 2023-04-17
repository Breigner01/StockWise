import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
} from "graphql";
import { ItemRequestType, ItemType } from "./types/Item.js";
import {
  addInventory,
  decreaseInventory,
  getInventory,
  storeInventory,
} from "../services/inventoryService.js";
import {
  getProductsByBrand,
  getProductById,
  getProductsByName,
  getProductsByPrice,
  createProduct,
  deleteProduct,
  updateProduct,
  getProducts,
} from "../services/productService.js";

import { InputProductType, ProductType } from "./types/Product.js";

const myArray = [
  { id: 1, firstName: "Mark", lastName: "O'Shaughnessy", age: 25 },
  { id: 2, firstName: "Kenny", lastName: "Ang", age: 23 },
  { id: 3, firstName: "Sean", lastName: "Williams", age: 21 },
];

const Items = [
  { inventorySku: "111", SKU: 1, name: "Blue Jacket", qty: 22, price: 45.99 },
  { inventorySku: "111", SKU: 2, name: "Green Pants", qty: 16, price: 36.99 },
  { inventorySku: "333", SKU: 3, name: "Denim Jacket", qty: 34, price: 29.99 },
];

const MockInventories = [
  {
    ownerId: "abc123",
    sku: "111",
    quantity: 255,
    available: 200,
    inTransit: 55,
  },
  { ownerId: "def123", sku: "222", quantity: 98, available: 20, inTransit: 78 },
  {
    ownerId: "ghi123",
    sku: "333",
    quantity: 123,
    available: 13,
    inTransit: 110,
  },
  {
    ownerId: "jkl123",
    sku: "444",
    quantity: 211,
    available: 200,
    inTransit: 11,
  },
];

const Query = new GraphQLObjectType({
  name: "MainQueryType",
  fields: {
    test: {
      type: GraphQLList(ItemType),
      async resolve(parent, args) {
        let data = await getInventory();

        console.log(data);

        return data.items;
      },
    },
    //PRODUCT QUERIES

    getProducts: {
      type: GraphQLList(ProductType),
      args: {
        userId: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const data = await getProducts();
        return data.productsFound
      },
    },
    getProductById: {
      type: ProductType,
      args: {
        userId: { type: GraphQLString },
        productId: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const data = await getProductById(args.productId);
        return data;
      },
    },
    getProductsbyName: {
        type: GraphQLList(ProductType),
        args: {
          userId: { type: GraphQLString },
          productName: { type: GraphQLString },
        },
        async resolve(parent, args) {
          const data = await getProductsByName(args.productName);
          return data.productsFound;
        },
    },
    getProductsbyBrand: {
        type: GraphQLList(ProductType),
        args: {
          userId: { type: GraphQLString },
          productBrand: { type: GraphQLString },
        },
        async resolve(parent, args) {
          const data = await getProductsByBrand(args.productBrand);
          console.log(data)
          return data.productsFound;
        },
    },

    // INVENTORY QUERIES
    viewInventory: {
      type: new GraphQLList(ItemType),
      args: {
        userId: { type: GraphQLString },
        sku: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const data = await getInventory(args.sku);
        return data.items;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //PRODUCT MUTATIONS
    createProduct: {
      type: GraphQLString,
      args: {
        userId: { type: GraphQLString },
        product: { type: InputProductType },
      },
      async resolve(parent, args) {
        console.log(args)
        const result = await createProduct(args.product);
        console.log(result)
        return result.statusMessage;
      },
    },

    deleteProduct: {
      type: GraphQLString,
      args: {
        userId: { type: GraphQLString },
        productId: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const result = await deleteProduct(args.productId);
        return result.statusMessage;
      },
    },
    updateProduct: {
      type: GraphQLString,
      args: {
        userId: { type: GraphQLString },
        product: { type: InputProductType },
      },
      async resolve(parent, args) {
        console.log(args)
        const result = await updateProduct(args.product);
        return result.statusMessage;
      },
    },
    //INVENTORY MUTATIONS
    addInventory: {
      type: GraphQLString,
      args: {
        userId: { type: GraphQLString },
        itemRequest: { type: ItemRequestType },
      },
      async resolve(parent, args) {
        const result = await addInventory(args.itemRequest);
        return result.message;
      },
    },
    decreaseInventory: {
      type: GraphQLString,
      args: {
        userId: { type: GraphQLString },
        itemRequest: { type: ItemRequestType },
      },
      async resolve(parent, args) {
        const result = await decreaseInventory(args.itemRequest);
        return result.message;
      },
    },
    storeInventory: {
      type: GraphQLString,
      args: {
        userId: { type: GraphQLString },
        itemRequest: { type: ItemRequestType },
      },
      async resolve(parent, args) {
        const result = await storeInventory(args.itemRequest);
        return result.message;
      },
    },
  },
});

export const Schema = new GraphQLSchema({ query: Query, mutation: Mutation });
