require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
// -------------------------------------------
// assets
// -------------------------------------------
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// -------------------------------------------
// set template engine
// -------------------------------------------
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

// -------------------------------------------
// Database connection
// -------------------------------------------
const url = process.env.MONGO_CONNECTION_URL;
let clientPromise = mongoose
  .connect(url)
  .then(() => {
    console.log("database connection successful");
  })
  .catch((err) => {
    console.log("database connection failed");
  });

// -------------------------------------------
// pass the express app object to web.js and api.js to create routes
// -------------------------------------------
require("./routes/web")(app);
require("./routes/api")(app);

// ---------------------------------------------
// middleware to handle unknown routes
// ---------------------------------------------
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
