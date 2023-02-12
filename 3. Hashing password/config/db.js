const mongoose = require("mongoose");

const config = require("./config");
const dbURL = config.db.url;

const dbConection = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConection;
