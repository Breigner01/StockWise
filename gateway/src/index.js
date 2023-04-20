import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
// import authMiddleware from './firebaseAuth/authMiddleware.js';
import { Schema } from "./graphql/schemas.js";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
//app.use(authMiddleware);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

export default app;
