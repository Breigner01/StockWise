import * as express from 'express';
import {graphqlHTTP} from 'express-graphql'
// const authMiddleware =  require('./firebaseAuth/authMiddleware');
const schema = require('./schemas/schemas')
const app = express();


// app.use(authMiddleware);
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server Running on Port ", PORT);
});

