const express = require('express');
const path = require('path');

// Initialize the app
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname, 'frontend', )
});

//When we deploy is gonna have a enviroment Port variable
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})


// admin - qkUDVpMx5ShvjD5o 
