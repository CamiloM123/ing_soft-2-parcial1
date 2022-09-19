const express = require("express");
const mongoose = require("mongoose");
const app = express()
const port = 5000 || process.env.PORT;
const purchaseRoute = require("./routes/purchase.routes")
require('dotenv').config()

//Port connection
app.listen(port, () => {
    console.log("Running in the port", port);
  });

//Middleware
app.use(express.json())
app.use('/api', purchaseRoute)

//Project routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });

mongoose
    .connect(process.env.CONNECTION_STRING_MONGODB)
    .then(() => {
      console.log("Successful connection with MongoDB");
    })
    .catch((err) => {
      console.error(err);
    });
  

  