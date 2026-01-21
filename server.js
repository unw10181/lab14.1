const express = require("express");
const app = express();
require("dotenv").config;

const dbConnection = require("./config/db");
const usrRoutes = require("./routes/userRoutes");
//INDUCES

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/users", usrRoutes);
//Connection
dbConnection();

//PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Sever is listening on port: ${PORT}`);
});
