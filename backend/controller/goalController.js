const asyncHandler = require("express-async-handler");

//@desc get goals
//@routre GET /api/goals
//@access privet
const getGoals = asyncHandler(async (req, res) => {
  const { thiss } = req.query;
  res.send("this is goals");
});
//@desc get goals
//@routre POST /api/goals
//@access privet
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add title");
  }
  res.status(200).json({ message: "this is goals" });
});

//@desc update goals
//@routre PUT  /api/goals/:id
//@access privet
const updateGoal = asyncHandler(async (req, res) => {
  const { thiss } = req.query;
  res.send(`this is goals1 ${req.params.id}`);
});

//@desc delete goal
//@routre delete /api/goals/:id
//@access privet
const deleteGoal = asyncHandler(async (req, res) => {
  res.send(`this is goals1 ${req.params.id}`);
});

module.exports = {
  getGoals,
  updateGoal,
  deleteGoal,
  setGoal,
};
