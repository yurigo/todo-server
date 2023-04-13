const express = require("express");

const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const usersRouter = require("./routers/users.router.js");

app.use("/users", usersRouter);


const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

const { graphqlHTTP } = require("express-graphql")
const { createHandler } = require( 'graphql-http/lib/use/express');
const { makeExecutableSchema } = require("@graphql-tools/schema");

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
  console.log(`http://localhost:${port}/todos`);
});
