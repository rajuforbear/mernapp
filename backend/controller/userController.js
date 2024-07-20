const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../modal/userModal");

//@desc register user
//@route POST api/users
//@access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Please add all field");
  }

  // check for user already exist
  const isuserExist = await User.findOne({ email });
  if (isuserExist) {
    res.status(400);
    throw new Error("user already exist");
  }
  const salt = await bcrypt.genSalt(10);

  //has the password
  const hashedPassword = await bcrypt.hash(password, salt);

  //create the user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: await genrateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc authenticate user
//@route GET api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //find the user
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: await genrateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc get  user data
//@route POST api/users/me
//@access private

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
const genrateToken = async (id) => {
  return await jwt.sign({ id }, "abc2344", {
    expiresIn: "30d",
  });
};
