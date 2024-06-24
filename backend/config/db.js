const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URL ??
        "mongodb+srv://user1234:user1234@cluster0.wy2w4v6.mongodb.net/mernapp?retryWrites=true&w=majority"
    );
    console.log(
      `mongobd connected on ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDb;
