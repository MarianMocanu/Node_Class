var app = require("express")();

app.get("/", (req, res) => {
    res.send({message: "You did it!"});
});

app.listen(3000);