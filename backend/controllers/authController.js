const User = require("../models/userModel");
const { sign } = require("jsonwebtoken");

const createToken = (_id) => {
  return sign({ _id }, process.env.ACCES_TOKEN_SECRET, { expiresIn: "3d" });
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    const acces_token = createToken(user._id)
    res.status(200).json({email: user.email, acces_token, role: user.role})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

// Signup
const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create token
    const acces_token = createToken(user._id)

    res.status(200).json({ email: user.email, acces_token, role: user.role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signout = async (req, res) => {
    console.log("Signout function not implemented")
}

module.exports = { login, signup, signout };
