const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../modal/userModal");
const protect = asyncHandler(async (req, res, next) => {
  try {
    let token;
    const Bearer = req.headers.authorization;
    if (Bearer && Bearer.startsWith("Bearer")) {
      token = Bearer.split(" ")[1];
    }
    const decode = await jwt.verify(token, "abc2344");
    const user = await User.findById(decode.id).select("-password");
    if (!user) {
      res.status(401).josn({
        massage: "No user found",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401);
    throw new Error("Un autorized");
  }
  //   if (!token) {
  //     res.status(401);
  //     throw new Error("Not Aurthorized");
  //   }
});
module.exports = { protect };
