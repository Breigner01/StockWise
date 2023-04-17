import { GraphQLID, GraphQLList, GraphQLString } from "graphql";

import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "../../services/categoryService.js";

export const createCategoryQuery = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await createCategory(args.name);
    } catch (err) {
      return null;
    }
    return data.statusMessage;
  },
};

export const deleteCategoryQuery = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await deleteCategory({ id: args.id, name: args.name });
    } catch (err) {
      return null;
    }
    return data.statusMessage;
  },
};

export const updateCategoryQuery = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await updateCategory({ id: args.id, name: args.name });
    } catch (err) {
      return null;
    }
    return data.statusMessage;
  },
};
