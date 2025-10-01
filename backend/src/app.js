// server create

const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')
const cors = require('cors')

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}))
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use('/api/auth', authRoutes)
app.use('/api/food', foodRoutes)

module.exports = app;