// load .env data into process.env
require("dotenv").config();

let users = [];
const { clientsHelperFunctionGenerator } = require("./helpers/users");
const { addUser, removeUser } = clientsHelperFunctionGenerator(users);

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

//SocketIo config
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a new user connected");
  console.log("Connected socketId:", socket.id);
  addUser(socket.id);
  console.log(users);
  io.to(socket.id).emit("hello");

  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log(users);
  });
});

// Set up cookie-session
const cookieSession = require("cookie-session");
app.use(cookieSession({ secret: process.env.SECRET }));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Separated Routes for each Resource
const usersRoutes = require("./routes/users");
const categoriesRoutes = require("./routes/categories");

// Mount all resource routes
app.use("/api/users", usersRoutes(db));
app.use("/api/categories", categoriesRoutes(db));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(401).send(err.message);
  next();
});

httpServer.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
