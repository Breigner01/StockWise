import * as express from 'express';
import { Request, Response} from 'express';
import {graphqlHTTP} from 'express-graphql'
const authMiddleware =  require('./firebaseAuth/authMiddleware');
const schema = require('./schemas/schemas')
const app = express();


app.use(authMiddleware);
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

export default app;
