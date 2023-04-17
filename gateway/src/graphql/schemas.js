import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  getProductsByBrandQuery,
  getProductsByIdQuery,
  getProductsByNameQuery,
  getProductsQuery,
} from "./queries/products.js";
import { viewInventoryQuery } from "./queries/inventory.js";
import {
  createProductMutation,
  deleteProductMutation,
  updateProductMutation,
} from "./mutations/products.js";
import {
  addInventoryMutation,
  decreaseInventoryMutation,
  storeInventoryMutation,
} from "./mutations/inventory.js";
import { getCategoriesQuery } from "./queries/categories.js";
import {
  createCategoryQuery,
  deleteCategoryQuery,
  updateCategoryQuery,
} from "./mutations/categories.js";

const Query = new GraphQLObjectType({
  name: "MainQueryType",
  fields: {
    //PRODUCT QUERIES
    getProducts: getProductsQuery,
    getProductById: getProductsByIdQuery,
    getProductsbyName: getProductsByNameQuery,
    getProductsbyBrand: getProductsByBrandQuery,

    // INVENTORY QUERIES
    viewInventory: viewInventoryQuery,

    //CATEGORY QUERIES
    getCategories: getCategoriesQuery,
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //PRODUCT MUTATIONS
    createProduct: createProductMutation,
    deleteProduct: deleteProductMutation,
    updateProduct: updateProductMutation,

    //INVENTORY MUTATIONS
    addInventory: addInventoryMutation,
    decreaseInventory: decreaseInventoryMutation,
    storeInventory: storeInventoryMutation,

    //CATEGORY MUTATIONS
    createCategory: createCategoryQuery,
    deleteCategory: deleteCategoryQuery,
    updateCategory: updateCategoryQuery,
  },
});

export const Schema = new GraphQLSchema({ query: Query, mutation: Mutation });
