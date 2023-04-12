import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLSchema } from "graphql"
import { ProductType } from "./types/Product"
import { UserType } from "./types/User"

const myArray = [{id:1,firstName:"Mark",lastName:"O'Shaughnessy",age:25},
{id:2,firstName:"Kenny",lastName:"Ang",age:23},
{id:3,firstName:"Sean",lastName:"Williams",age:21}]

const Products = 
[{SKU:1, name: "Blue Jacket", qty: 22, price: 45.99},
{SKU:2, name: "Green Pants", qty: 16, price: 36.99},
{SKU:3, name: "Denim Jacket", qty: 34, price: 29.99}
]

const Query = new GraphQLObjectType({
    name: "MainQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            resolve(parent,args){


                
                return myArray
            }
        },
        getUserById: {
            type: UserType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent,args){
                const data = myArray.filter(e => e.id == args.id)
                return data[0]
            }
        },
        getAllProducts:{
            type: new GraphQLList(ProductType),
            resolve(parent,args){
                return Products
            }
        }
    },
})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
            resolve(parent,args){
                myArray.push({id: myArray.length + 1,firstName: args.firstName,lastName: args.lastName, age: args.age})
                return args
            }
        }
    }
})

const Schema = new GraphQLSchema({query: Query ,mutation: Mutation})
module.exports = Schema