// Libary Imports
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

// File Import
const users = require("./routes/api/users");

// SETUP
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./config/passport")(passport);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Routes
app.use("/api/users", users);
