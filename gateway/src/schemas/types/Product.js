import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLInputObjectType } from "graphql";


export const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        brand: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        categeory: {type: GraphQLString}
    })
})

export const InputProductType = new GraphQLInputObjectType({
    name: "ProductInput",
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        brand: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        categeory: {type: GraphQLString}
    }
})

export const ProductRequest = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        brand: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        categeory: {type: GraphQLString}
    })
})

export const ProductMutationResponse = new GraphQLObjectType({
    name: "ProductMutation",
    fields: () => ({
        status: {type: GraphQLString}
    })
})