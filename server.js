const express = require("express");
const app = express();
require("dotenv").config();

const dbConnection = require("./config/db");
const userRoutes = require("./routes/userRoutes");
//INDUCES

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/users", userRoutes);
//Connection
dbConnection();

//PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Sever is listening on port: ${PORT}`);
});
