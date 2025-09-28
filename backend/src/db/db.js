// db connection logic

const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Mongoose connected");
        })
        .catch((err) => {
            console.log("Mngoose not connected : ", err);
        });
}

module.exports = connectDB;