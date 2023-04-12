import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } from "graphql";


export const ItemType = new GraphQLObjectType({
    name: "Item",
    fields: () => ({
        ownerId: {type: GraphQLString},
        sku: {type: GraphQLInt},
        quantity: {type: GraphQLInt},
        available: {type: GraphQLInt},
        inTransit: {type: GraphQLInt}
    })
})

export const ItemRequestType = new GraphQLObjectType({
    name: "ItemRequest",
    fields: () => ({
        ownerId: {type: GraphQLString},
        sku: {type: GraphQLInt},
        quantity: {type: GraphQLInt}
    })
})