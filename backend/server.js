const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cross = require("cors");
const bodyparser = require("body-parser");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;
connectDb();
const app = express();
app.use(cross());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log("server started on port " + port.toString());
});
