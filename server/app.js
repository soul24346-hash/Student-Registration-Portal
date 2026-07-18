const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const sequelize = require("./config/database");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("🎉 Student Registration Portal Backend is Running!");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database Connected Successfully!");
    return sequelize.sync();
  })
  .then(() => {
    console.log("✅ Database Tables Created!");
  })
  .catch((err) => {
    console.error("❌ Database Error:", err.message);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});