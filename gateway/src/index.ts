import * as express from 'express';
import { Request, Response} from 'express';
import {graphqlHTTP} from 'express-graphql'
const authMiddleware =  require('./firebaseAuth/authMiddleware');
const schema = require('./schemas/schemas')
const app = express();
const PORT = 8080;



app.use('/graphql',authMiddleware, graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(PORT, () => {
    console.log("Server Running on Port ",PORT)
})
