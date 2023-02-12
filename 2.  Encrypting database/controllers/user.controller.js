const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

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
