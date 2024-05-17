const mongoose = require("mongoose");
// Set up default mongoose connection

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DB_URI, {})
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error(`MongoDB connection error: ${error}`);
      // Handle the error appropriately (e.g., exit the application)
      process.exit(1);
    });
};

module.exports = { connectDB };

// const mongoose = require("mongoose");

// const connectDB = async (url) => {
//   try {
//     await mongoose.connect(url);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log("Some error occured while connecting to DB");
//     console.log(error);
//   }
// };

// module.exports = { connectDB };
