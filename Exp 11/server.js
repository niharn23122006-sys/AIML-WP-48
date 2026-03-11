const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userdb')
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Create Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create Model
const User = mongoose.model("User", userSchema);

// POST API - Create User
app.post('/users', async (req,res)=>{
    const user = new User({
        name: "Nihar",
        email: "nihar@gmail.com",
        age: 19
    });

    await user.save();
    res.json(user);
});

// GET API - Get All Users
app.get('/users', async (req,res)=>{
    const users = await User.find();
    res.json(users);
});

// GET API - Get User by ID
app.get('/users/:id', async (req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
});

// Start Server
app.listen(PORT, ()=>{
    console.log("Server running on port 5000");
});

// UPDATE user
app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
});

// DELETE user
app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
});