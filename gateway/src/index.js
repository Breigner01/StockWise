import express from "express";
import { graphqlHTTP } from "express-graphql";
//import authMiddleware from './firebaseAuth/authMiddleware.js';
import { Schema } from "./schemas/schemas.js";
const app = express();


//app.use(authMiddleware);
app.use(
    "/graphql",
    graphqlHTTP({
        schema: Schema,
        graphiql: true
       
    })
);

export default app;
