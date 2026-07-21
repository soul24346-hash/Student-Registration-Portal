import "../styles/Register.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API_URL from "../config/api";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    address: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("course", formData.course);
      data.append("address", formData.address);
      data.append("profileImage", formData.profileImage);

      const response = await axios.post(
  `${API_URL}/api/students/register`,
  formData
);

      alert(response.data.message);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        address: "",
        profileImage: null,
      });

      document.querySelector('input[type="file"]').value = "";
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">
  🎓 Student Registration Portal
</h1>

      <div className="register-card">
        <h2>Register Student</h2>

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

          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            required
          />

         <button
  type="submit"
  className="register-btn"
> Register Student</button>
        </form>

        <br />

        <Link to="/students">
         <button className="view-btn">
  📋 View Registered Students
</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;