import * as express from 'express';
import { Request, Response} from 'express';
import {graphqlHTTP} from 'express-graphql'
const schema = require('./schemas/schemas')
const app = express();
const PORT = 8080;

//SHA encryption for the auth token using shared key?

//Auth with Firebase?

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(PORT, () => {
    console.log("Server Running on Port ",PORT)
})
