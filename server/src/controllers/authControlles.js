const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Handle user registration
const registerHandle = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All Fields Are Required..!" });
    }

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Generate Salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = { user: { id: newUser._id, name: newUser.name } };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .status(201)
      .json({ success: "User Created Successfully", token });
  } catch (error) {
    return res.status(500).json({ error: "Server Error", error });
  }
};

// Handle user login
const loginHandle = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({ error: "All Fields Are Required..!" });
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Check if password is correct
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create a JWT token
    const payload = { user: { id: user._id, name: user.name } };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({ success: "User Loggedin Successfully", token });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

// Profile Handle
const profileHandle = async (req, res) => {
  console.log(req.user);
  res.send("PROFILE PAGE");
};

const verifyUser = async (req, res) => {
  try {
    const token = req.body.token;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ isValid: false, message: "Invalid token" });
      }
      res.json({ isValid: true, decoded });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerHandle,
  loginHandle,
  profileHandle,
  verifyUser,
};
