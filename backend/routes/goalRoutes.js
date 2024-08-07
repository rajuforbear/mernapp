const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddelware");
const {
  getGoals,
  deleteGoal,
  setGoal,
  updateGoal,
} = require("../controller/goalController");
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);
module.exports = router;
