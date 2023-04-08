import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";



export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLInt},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})