import  express from 'express';
import {graphqlHTTP} from 'express-graphql'
// const authMiddleware =  require('./firebaseAuth/authMiddleware');
import {Schema} from './schemas/schemas.js'
const app = express();


// app.use(authMiddleware);
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}))


const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server Running on Port ", PORT);
});

