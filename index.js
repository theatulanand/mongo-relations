const express = require('express');
const app = express()
const connectDatabase = require('./Database');

app.get("/", (req, res) => {
    res.send('<h1 style = "text-align : center;">Welcome to my app</h1>')
})

connectDatabase().then(() => {
    app.listen(3001, () => {
        console.log("Server Started At PORT: 3001");
    })
}).catch((err) => {
    console.log("Error is", err);
})