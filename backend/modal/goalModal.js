const mongoose = require("mongoose");
const goaldSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Goals", goaldSchema);
