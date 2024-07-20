const asyncHandler = require("express-async-handler");
const Goal = require("../modal/goalModal");
const User = require("../modal/userModal");
//@desc get goals
//@routre GET /api/goals
//@access privet
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});
//@desc get goals
//@routre POST /api/goals
//@access privet
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add title");
  }
  const goal = await Goal.create({ text: req.body.text, user: req.user.id });
  res.status(201).json(goal);
});

//@desc update goals
//@routre PUT  /api/goals/:id
//@access privet
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("goald not found");
  }
  //check for user
  // const user = await User.findById(req.user.id);
  if (!req.user.id) {
    res.status(401);
    throw new Error("User not exist");
  }

  //make sure loged user mathches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not aurthorized");
  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

//@desc delete goal
//@routre delete /api/goals/:id
//@access privet
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  console.log("thiussisisi", goal);
  if (!goal) {
    res.status(400);
    throw new Error("goald not found");
  }

  //check for user
  // const user = await User.findById(req.user.id);
  if (!req.user.id) {
    res.status(401);
    throw new Error("User not exist");
  }

  //make sure loged user mathches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("user not aurthorized");
  }

  await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  updateGoal,
  deleteGoal,
  setGoal,
};
