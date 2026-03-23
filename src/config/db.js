const mongoose = require("mongoose");
const { DB_URI } = require("./env");

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("✅ DB Connected");
  } catch (err) {
    console.error("❌ DB Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;




