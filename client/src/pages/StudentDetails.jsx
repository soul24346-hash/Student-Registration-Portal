import "../styles/StudentDetails.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import API_URL from "../config/api";

function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await axios.get(
  `${API_URL}/api/students/${id}`
);

      setStudent(response.data.student);
    } catch (error) {
      console.error(error);
    }
  };

  if (!student) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="container">

      <h1>👤 Student Profile</h1>

      <div className="form-container">

        {student.profileImage && (
  <img
  className="student-image"
  src={`${API_URL}/uploads/${student.profileImage}`}
  alt={student.fullName}
/>
)}

<h2 className="student-name">{student.fullName}</h2>

<div className="student-info">
  <p><strong>Email:</strong> {student.email}</p>
  <p><strong>Phone:</strong> {student.phone}</p>
  <p><strong>Course:</strong> {student.course}</p>
  <p><strong>Address:</strong> {student.address}</p>
</div>

<Link to="/students">
  <button className="details-back-btn">
  ⬅ Back to Students
</button>
</Link>

      </div>

    </div>
  );
}

export default StudentDetails;