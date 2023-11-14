const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection Success"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running");
});
