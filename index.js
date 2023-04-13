
import express from "express";


import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//const usersRouter = require("./routers/users.router.js");
import { router as usersRouter }  from "./routers/users.router.js"
app.use("/users", usersRouter);

// const typeDefs = require("./typedefs");
import { typeDefs } from "./typedefs.js";
// const resolvers = require("./resolvers");
import { resolvers } from "./resolvers.js";

// const { graphqlHTTP } = require("express-graphql")
import {graphqlHTTP} from "express-graphql";
// const { createHandler } = require( 'graphql-http/lib/use/express');
// const { makeExecutableSchema } = require("@graphql-tools/schema");
import { makeExecutableSchema} from "@graphql-tools/schema"

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
);

// app.use(
//     "/graphql",
//     createHandler({
//       schema: schema,
//     })
// );


app.all("*", (req, res) => {
  res.status(404).json({ error: "esta no es la página que estabas buscando" });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/graphql`);
});
