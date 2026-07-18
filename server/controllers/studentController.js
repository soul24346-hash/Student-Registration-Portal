const Student = require("../models/Student");

// Register Student
const registerStudent = async (req, res) => {
  try {
    const student = await Student.create({
      ...req.body,
      profileImage: req.file ? req.file.filename : null,
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      student,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
      errors: error.errors?.map((err) => ({
        field: err.path,
        message: err.message,
        value: err.value,
      })),
    });
  }
};

// Get All Students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Student
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await student.update(req.body);

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await student.destroy();

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};