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
    res.send({
        name: "Marian", 
        age: 26, 
        hobby: {
            photography: "portraits",
            sports: "basketball",
            music: "guitar playing"
        }
    });
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/time", (req, res) => {
    let today = new Date();
    let day = today.getDate();
    
    res.send({
        time: today.toString(),
        day: days[today.getDay()]
    });
});

app.listen(3000, error => {
    console.log(error);
    if (error) {
        console.log("Error running the server.", error);
    }
    console.log("Server is running on port", 3000);
});