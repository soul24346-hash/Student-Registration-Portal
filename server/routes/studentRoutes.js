const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  registerStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// Register a new student
router.post(
  "/register",
  upload.single("profileImage"),
  registerStudent
);

// Get all students
router.get("/", getAllStudents);

// Get student by ID
router.get("/:id", getStudentById);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;