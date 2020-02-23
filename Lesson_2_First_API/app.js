// // library = express
// var express = require("express");
// //server instance
// var app = express();

const app = require("express")();
const faker = require("faker");
const request = require("request");

//callback function
app.get("/", (req, res) => {
    res.send({ message: "Hello there!" });
});

app.get("/assignment", (req, res) => {
    res.send({ message: "Solving mini-asignment" });
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

const users = [{
    id: 1,
    name: faker.name.findName(),
    address: faker.address.streetAddress()
}, {
    id: 2,
    name: faker.name.findName(),
    address: faker.address.streetAddress()
}];

app.get("/users/:id", (req, res) => {
    res.send(users.find(user => user.id === Number(req.params.id)));
});

app.get("/search", (req, res) => {
    let errorMessage = { message: "Query parameter not found" };
    if (req.query.id == null)
        return res.send(errorMessage);
    if (users.find(user => user.id === Number(req.query.id)))
        return res.send(users.find(user => user.id === Number(req.query.id)));
    else return res.send(errorMessage);
});

app.get("/google", (req, res) => {
    request('http://www.google.com', (error, response, body) => {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        return res.send(body);
    });
});

app.get("/documentationone", (req, res) => {
    // return res.redirect("/documentationtwo");
    return res.sendFile(__dirname + "/public/documentationone.html");
});

app.get("/documentationtwo", (req, res) => {
    return res.sendFile(__dirname + "/public/documentationtwo.html");
});

app.listen(3000, error => {
    console.log(error);
    if (error) {
        console.log("Error running the server.", error);
    }
    console.log("Server is running on port", 3000);
});