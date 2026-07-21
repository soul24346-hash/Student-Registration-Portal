import "../styles/Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>🎓 Student Registration Portal</h1>
        <p>Welcome to the Student Management System</p>
      </div>

      <div className="dashboard-cards">

        <Link to="/register" className="card register-card">
          <div className="card-icon">📝</div>

          <h2>Register Student</h2>

          <p>Add a new student to the system.</p>

          <span className="card-button">
            Go to Registration →
          </span>
        </Link>

        <Link to="/students" className="card students-card">
          <div className="card-icon">📋</div>

          <h2>View Students</h2>

          <p>Search, edit, delete and manage students.</p>

          <span className="card-button">
            View Students →
          </span>
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;