import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  function Private({ children }) {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to="/login" />;
    return children;
  }


  return (
    <div className="min-h-screen bg-pink-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />
          <Route
            path="/profile"
            element={
              <Private>
                <Profile />
              </Private>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
