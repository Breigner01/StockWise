import { GraphQLInt, GraphQLString } from "graphql";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../services/productService.js";

import { InputProductType, ProductType } from "../types/product.js";

export const createProductMutation = {
  type: ProductType,
  args: {
    userId: { type: GraphQLString },
    product: { type: InputProductType },
  },
  async resolve(parent, args) {
    let result = null;
    try {
      result = await createProduct(args.product);
    } catch (err) {
      return null;
    }
    return result;
  },
};

export const deleteProductMutation = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    productId: { type: GraphQLInt },
  },
  async resolve(parent, args) {
    let result = null;
    try {
      result = await deleteProduct(args.productId);
    } catch (err) {
      return null;
    }
    return result.statusMessage;
  },
};

export const updateProductMutation = {
  type: ProductType,
  args: {
    userId: { type: GraphQLString },
    product: { type: InputProductType },
  },
  async resolve(parent, args) {
    let result = null;
    try {
      result = await updateProduct(args.product);
    } catch (err) {
      return null;
    }
    if(result.statusMessage){
      return args.product
    }
  },
};
