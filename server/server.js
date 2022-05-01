// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

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

// Mount all resource routes
app.use("/api/users", usersRoutes(db));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(401).send(err.message);
  next();
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
