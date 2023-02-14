require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const userRouter = require("./routes/user.route");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);

// Home Route Control...
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  res.statusCode = 200;
});

// Error Route Control..
app.use((req, res, next) => {
  res.status(404).json({
    message: "404-Error...!!! Route Not Found",
  });
});

// Server Error
app.use((err, req, res, next) => {
  res.status(5000).json({
    message: "Server Error , Something Broke",
  });
});

module.exports = app;
