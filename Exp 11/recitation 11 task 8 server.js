
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/userDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

/* CREATE USER */
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User created", user });
});

/* GET USERS */
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

/* UPDATE USER */
app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});

/* DELETE USER */
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});