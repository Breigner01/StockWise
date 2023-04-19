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
    let data = null;
    try {
      data = await addInventory(args.itemRequest);
    } catch (err) {
      return null;
    }
    return data.message;
  },
};

export const decreaseInventoryMutation = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    itemRequest: { type: ItemRequestType },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await decreaseInventory(args.itemRequest);
    } catch (err) {
      return null;
    }
    return data.message;
  },
};

export const storeInventoryMutation = {
  type: GraphQLString,
  args: {
    userId: { type: GraphQLString },
    itemRequest: { type: ItemRequestType },
  },
  async resolve(parent, args) {
    let data = null;
    try {
      data = await storeInventory(args.itemRequest);
    } catch (err) {
      return null;
    }
    return data.message;
  },
};
