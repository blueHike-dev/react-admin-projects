const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const blogRoute = require("./routes/blog");

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // If you need to support cookies or authentication headers
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection Success"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/blogs", blogRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running");
});
