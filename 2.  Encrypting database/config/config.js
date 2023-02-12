require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    url: process.env.MONGO_URL || "mongodb://localhost:270170/userDemaDB",
  },
};

module.exports = dev;
