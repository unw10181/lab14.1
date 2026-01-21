const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    // DB Connection
    mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.error("Error: ", error);
    process.exit(1);
  }
};

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

module.exports = dbConnection;
