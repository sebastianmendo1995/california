// Libary Imports
const express = require('express');
const mongoose = require('mongoose');

// File Import
const users = require('./routes/api/users');

// SETUP
const app = express();

const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))

//When we deploy is gonna have a enviroment Port variable
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
}) 

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/api/users", users);
