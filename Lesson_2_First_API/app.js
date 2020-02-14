// // library = express
// var express = require("express");
// //server instance
// var app = express();

var app = require("express")();

//callback function
app.get("/", (req, res) => {
    res.send({message: "Hello there!"});
});

app.get("/assignment", (req, res) => {
    res.send({message: "Solving mini-asignment"});
});

app.get("/aboutMe", (req, res) => {
    res.send({name: "Marian", age: "26", hobby: "node.js"});
});


app.listen(3000);