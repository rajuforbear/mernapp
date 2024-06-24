const asyncHandler = require("express-async-handler");
const Goal = require("../modal/goalModal");
//@desc get goals
//@routre GET /api/goals
//@access privet
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
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
  const goal = await Goal.create({ text: req.body.text });
  res.status(200).json(goal);
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
  if (!goal) {
    res.status(400);
    throw new Error("goald not found");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  updateGoal,
  deleteGoal,
  setGoal,
};
