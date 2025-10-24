// src/db/db.js
const mongoose = require("mongoose");

function connectDB() {
    return mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("✅ Mongoose connected");
        })
        .catch((err) => {
            console.error("❌ Mongoose not connected:", err);
            throw err;
        });
}

module.exports = connectDB;