//
//  Imports
//

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const corsOptions = require("./config/corsOptions");

// Route imports


// Middleware imports
const verifyJWT = require("./middleware/verifyJWT");
const credentials = require("./middleware/credentials")
const requestLogger = require("./middleware/requestLogger")

//
//  Uses
//
const app = express();

// Middleware
app.use(express.json());
app.use(credentials);
app.use(cors(corsOptions));
app.use(requestLogger);

// Unprotected Routes

// Protected Routes
app.use(verifyJWT)

// DB connection and start app
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("DB Connection succesful and the app is running");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
