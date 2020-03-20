const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let cars = [
  { id: 1, brand: "Mercedes" },
  { id: 2, brand: "BMW" }
];
let currentId = 2;

//  parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.get("/", (req, res) => {
  return res.send({ about: "Car API version 0.0.1" });
});

app.get("/cars", (req, res) => {
  return res.send({ cars: cars });
});

app.get("/cars/:id", (req, res) => {
  return res.send(cars.find(car => car.id === Number(req.params.id)));
});

// post for creating new object
app.post("/cars", (req, res) => {
  let newCar = req.body;
  newCar.id = ++currentId;
  cars.push(newCar);

  return res.send({ response: newCar });
});

app.put("/cars/:id", (req, res) => {
  const index = cars.findIndex(car => (car.id = Number(req.params.id)));
  delete req.body.id;
  const updatedCar = { ...cars[index], ...({ brand } = req.body) };
  cars[index] = updatedCar;

  return res.send({ response: cars });
});

app.delete("/cars/:id", (req, res) => {
  cars = cars.filter(car => car.id !== Number(req.params.id));

  return res.send({response: cars})
});




const server = app.listen(PORT, error => {
  if (error) console.log("Error runing the server:", error);
  console.log("Server running on port:", server.address().port);
});
