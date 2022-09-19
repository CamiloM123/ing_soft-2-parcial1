const express = require("express");
const app = express()
const port = 5000 || process.env.PORT;


//Port connection
app.listen(port, () => {
    console.log("Running in the port", port);
  });

