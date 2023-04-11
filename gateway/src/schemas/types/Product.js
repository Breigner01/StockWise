import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } from "graphql";


export const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        SKU: {type: GraphQLInt},
        name: {type: GraphQLString},
        qty: {type: GraphQLInt},
        price: {type: GraphQLFloat}
    })
})