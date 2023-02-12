const mongoose = require("mongoose");
var encrypt = require("mongoose-encryption");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const encKey = process.env.ENC_KEY;
// encrypt age regardless of any other options. name and _id will be left unencrypted
userSchema.plugin(encrypt, {
  secret: encKey,
  encryptedFields: ["password"],
});

module.exports = mongoose.model("user", userSchema);
