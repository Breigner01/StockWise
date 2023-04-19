import { GraphQLList, GraphQLString } from "graphql";
import { CategoryType } from "../types/category.js";
import { getCategories } from "../../services/categoryService.js";

export const getCategoriesQuery = {
  type: new GraphQLList(CategoryType),
  args: {
    userId: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await getCategories();
    } catch (err) {
      return null;
    }
    return data.Categories;
  },
};
