import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString}
    }),
})