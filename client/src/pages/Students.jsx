import "../styles/Students.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API_URL from "../config/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
  `${API_URL}/api/students`
);

      setStudents(response.data.students);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
  `${API_URL}/api/students/${id}`
);
      alert("Student deleted successfully!");

      fetchStudents();
    } catch (error) {
      alert("Failed to delete student.");
      console.error(error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.fullName.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase()) ||
    student.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="students-container">

      <h1 className="students-title">
        📋 Registered Students
      </h1>

      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search by Name, Email or Course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>

        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.length > 0 ? (

            filteredStudents.map((student) => (

              <tr key={student.id}>

                <td>
                  {student.profileImage ? (
                    <img
  className="student-photo"
  src={`${API_URL}/uploads/${student.profileImage}`}
  alt={student.fullName}
/>
                  ) : (
                    "No Photo"
                  )}
                </td>

                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.course}</td>
                <td>{student.address}</td>

                <td>
                  <div className="action-buttons">

                    <Link to={`/student/${student.id}`}>
                      <button className="view-btn">
                        👁 View
                      </button>
                    </Link>

                    <Link to={`/edit/${student.id}`}>
                      <button className="edit-btn">
                        ✏ Edit
                      </button>
                    </Link>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student.id)}
                    >
                      🗑 Delete
                    </button>

                  </div>
                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="7" className="no-data">
                No matching students found.
              </td>
            </tr>

          )}

        </tbody>

      </table>

      <Link to="/dashboard">
        <button className="back-btn">
          ⬅ Back to Dashboard
        </button>
      </Link>

    </div>
  );
}

export default Students;