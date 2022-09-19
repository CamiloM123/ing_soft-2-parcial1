const express = require("express");
const mongoose = require("mongoose");
const app = express()
const port = 5000 || process.env.PORT;
require('dotenv').config()

//Port connection
app.listen(port, () => {
    console.log("Running in the port", port);
  });

app.get('/',(req,res)=>res.send("Parcial-1"))
  
mongoose
    .connect(process.env.CONNECTION_STRING_MONGODB)
    .then(() => {
      console.log("Successful connection with MongoDB");
    })
    .catch((err) => {
      console.error(err);
    });
  

  