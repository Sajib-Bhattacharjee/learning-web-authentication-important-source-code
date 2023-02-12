const md5 = require("md5");
const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: md5(req.body.password),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = md5(req.body.password);

    const user = await User.findOne({ email: email });
    if (user && user.password === password) {
      res.status(200).json({ message: "Valid User" });
    } else {
      res.status(404).json({ message: "Wrong User Name or Password" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createUser, loginUser };
