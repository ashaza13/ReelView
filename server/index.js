const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Set up port
const PORT = process.env.PORT || 3001;

// Set up express app
const app = express();

const jsonParser = bodyParser.json();

// Set up cors to allow us to accept requests from our client
app.use(cors());
app.use(jsonParser);

// Set up express app to handle data parsing
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to the Mongo DB
mongoose.connect(process.env.DB_URI, dbOptions);

// Define middleware here
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to DB"));


// Define users schema
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  email: String,
  favoriteMovies: [String],
  watchList: [String],
  userReviews: [
    {
      movieId: Number,
      review: String,
      rating: Number
    }
  ]
});

// Define users model
const User = mongoose.model("User", userSchema);

// Login route
app.post("/api/login", (req, res) => {
  // Check if the email and password are valid
  if (!req.body.email) {
    res.status(400).json({ error: "Email is required" });
  } else if (!req.body.password) {
    res.status(400).json({ error: "Password is required" });
  } else {
    // Log the user in
    User.findOne({ email: req.body.email })
      .then((data) => {
        if (data) {
          if (data.password === req.body.password) {
            res.status(200).json({ success: true, userId: data._id });
          } else {
            res.status(400).json({ error: "Invalid email or password" });
          }
        } else {
          res.status(400).json({ error: "Invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
      });
  }
});

// Register route
app.post("/api/register", (req, res) => {
  // Check if the email and password are valid
  console.log(req.body);
  if (!req.body.email) {
    res.status(400).json({ error: "Email is required" });
  } else if (!req.body.password) {
    res.status(400).json({ error: "Password is required" });
  } else {
    // Register the user
    User.findOne({ email: req.body.email })
      .then((data) => {
        if (data) {
          res.status(400).json({ error: "Email already exists" });
        } else {
          const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            favoriteMovies: [],
            watchList: [],
            userReviews: []
          });

          newUser.save().then(() => {
            res.status(200).json({ success: true });
          }
          ).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Something went wrong" });
          });
        }
      })
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});