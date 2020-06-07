const express = require("express");

require("dotenv").config();

const app = express();
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");

app.use(cookieParser());
app.use(express.json());

const mongooseURI = process.env.MONGOOSE_URI;
mongoose.connect(
  mongooseURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to DB");
  }
);

app.listen(5000, () => {
  console.log("server started");
});
