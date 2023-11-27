const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(5000, () => {
  console.log("Backend server is running!");
});
