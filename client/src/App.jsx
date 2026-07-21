import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Students from "./pages/Students";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
   <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/register" element={<Register />} />
  <Route path="/students" element={<Students />} />
  <Route path="/edit/:id" element={<EditStudent />} />
  <Route path="/student/:id" element={<StudentDetails />} />
</Routes>
  );
}

export default App;