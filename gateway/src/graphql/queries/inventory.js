import { GraphQLList, GraphQLString } from "graphql";
import { ItemType } from "../types/item.js";
import { getInventory } from "../../services/inventoryService.js";

export const viewInventoryQuery = {
  type: new GraphQLList(ItemType),
  args: {
    userId: { type: GraphQLString },
    sku: { type: GraphQLString },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await getInventory(args.sku);
    } catch (err) {
      return null;
    }
    return data.items;
  },
};
