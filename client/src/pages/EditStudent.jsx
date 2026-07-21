import "../styles/EditStudent.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../config/api";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    address: "",
  });

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      await axios.get(
  `${API_URL}/api/students/${id}`
);
      setFormData({
        fullName: response.data.student.fullName,
        email: response.data.student.email,
        phone: response.data.student.phone,
        course: response.data.student.course,
        address: response.data.student.address,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to load student.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
  `${API_URL}/api/students/${id}`,
  formData
);
      alert("Student updated successfully!");

      navigate("/students");
    } catch (error) {
      console.error(error);
      alert("Failed to update student.");
    }
  };

  return (
    <div className="container">
      <h1>✏ Edit Student</h1>

      <div className="form-container">
        <h2>Edit Student</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Update Student</button>
        </form>

        <br />

        <button
  className="back-button"
  onClick={() => navigate("/students")}
>
  ⬅️ Back to Students
</button>
      </div>
    </div>
  );
}

export default EditStudent;