const express = require("express");
const app = express();
require("dotenv").config;

const dbConnection = require("./config/db");
//INDUCES

dbConnection();

//PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Sever is listening on port: ${PORT}`);
});
