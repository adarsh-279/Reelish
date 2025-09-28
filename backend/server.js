// server start

require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.listen(8000, () => {
  console.log("Sever running on port 8000");
});
