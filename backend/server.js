const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;
connectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log("server started on port " + port.toString());
});
