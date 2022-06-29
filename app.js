// require("dotenv").config();
// const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

// // Database connection
// mongoose
//   .connect(
//     process.env.STAGE !== "test"
//       ? process.env.MONGODB_URI
//       : process.env.TEST_MONGODB_URI,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true
//     }
//   )
//   .catch((err) => console.log(err));

const submitTweet = require("./routes/submitTweet");

app.use("/", submitTweet);

module.exports = app;
