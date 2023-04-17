import { GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import {
  getProductsByBrand,
  getProductById,
  getProductsByName,
  getProducts,
} from "../../services/productService.js";
import { ProductType } from "../types/product.js";

export const getProductsQuery = {
  type: GraphQLList(ProductType),
  args: {
    userId: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await getProducts();
    } catch (err) {
      return null;
    }
    return data.productsFound;
  },
};

export const getProductsByIdQuery = {
  type: ProductType,
  args: {
    userId: { type: GraphQLString },
    productId: { type: GraphQLInt },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await getProductById(args.productId);
    } catch (err) {
      return null;
    }
    return data;
  },
};

export const getProductsByNameQuery = {
  type: GraphQLList(ProductType),
  args: {
    userId: { type: GraphQLString },
    productName: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await getProductsByName(args.productName);
    } catch (err) {
      return null;
    }

    return data.productsFound;
  },
};

export const getProductsByBrandQuery = {
  type: GraphQLList(ProductType),
  args: {
    userId: { type: GraphQLString },
    productBrand: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await getProductsByBrand(args.productBrand);
    } catch (err) {
      return null;
    }

    return data.productsFound;
  },
};
