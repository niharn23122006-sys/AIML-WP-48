const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/users", (req, res) => {
  res.json([
    { name: "Nihar", email: "nihar@gmail.com", age: 20 },
    { name: "Rahul", email: "rahul@gmail.com", age: 21 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});