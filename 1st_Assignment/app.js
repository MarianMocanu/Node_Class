const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(PORT, error => {
  if (error) console.log("Error runing the server:", error);
  console.log("Server running on port:", server.address().port);
});
