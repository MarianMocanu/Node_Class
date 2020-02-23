const app = require("express")();

app.get("/:path", (req, res) => {
  res.sendFile(__dirname + "/public/" + req.params.path + ".html");
});

app.listen(3000, error => {
  console.log(error);
  if (error) console.log("Error running on server:", error);
  console.log("Server running on port", 3000);
});
