const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully!!!! 🚀",
  });
});

// Hello route
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Express backend!",
  });
});

// Users route
app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "John Doe",
      role: "Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Manager",
    },
    {
      id: 4,
      name: "Shawn White",
      role: "Devops Engineer",
    },
  ]);
});

// Products route
app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Laptop",
      price: 1200,
    },
    {
      id: 2,
      name: "Phone",
      price: 800,
    },
    {
      id: 3,
      name: "Headphones",
      price: 150,
    },
    {
      id: 4,
      name: "Computer",
      price: 200,
    },
  ]);
});

// Profile route
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Vansh Saluja",
    profession: "Full Stack Developer",
    cloudLearning: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});