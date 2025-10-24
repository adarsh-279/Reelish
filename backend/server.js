// server.js
require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

const PORT = process.env.PORT || 8000;

// Connect to MongoDB and then start the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err);
    });
