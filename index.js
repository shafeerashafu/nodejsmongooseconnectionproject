import express from "express";
import todosRouter from "./Routes/todos.js";
import usersRouter from "./Routes/users.js";
import connectToDb from "./database/mongoose-connection.js";
const server = express();

// await in the top-level / global scope is allowed
await connectToDb();

// middleware to process the body of the request
server.use(express.json()); // used to parse the body of the request


// usage of express router
server.use("/api/todos", todosRouter);
server.use("/api/users",usersRouter);

const port = 8000;

server.listen(port, () => {
  console.log("listening on port " + port);
});