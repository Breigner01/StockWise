import { GraphQLString } from "graphql";
import { ItemRequestType } from "../types/item.js";
import {
  addInventory,
  decreaseInventory,
  storeInventory,
} from "../../services/inventoryService.js";

export const addInventoryMutation = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    itemRequest: { type: ItemRequestType },
  },
  async resolve(parent, args) {
    const result = await addInventory(args.itemRequest);
    return result.message;
  },
};

export const decreaseInventoryMutation = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    itemRequest: { type: ItemRequestType },
  },
  async resolve(parent, args) {
    const result = await decreaseInventory(args.itemRequest);
    return result.message;
  },
};

export const storeInventoryMutation = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    itemRequest: { type: ItemRequestType },
  },
  async resolve(parent, args) {
    const result = await storeInventory(args.itemRequest);
    return result.message;
  },
};
