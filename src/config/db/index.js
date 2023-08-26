const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Code_learn_dev");
    console.log("kết nối thành công");
  } catch (err) {
    console.log("Failed to connect", err);
  }
}

module.exports = { connect };
