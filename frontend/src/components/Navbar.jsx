import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  function out() {
    localStorage.clear();
    nav("/login");
  }

  return (
    <div className="bg-pink-200 p-4 flex items-center justify-between shadow">
      <div className="text-pink-800 font-bold">2Do List 💗</div>
      <div className="flex gap-4 text-sm">
        {token && (
          <>
            <Link to="/dashboard" className="text-pink-800">
              Dashboard
            </Link>
            <Link to="/profile" className="text-pink-800">
              Profile
            </Link>
            <button onClick={out} className="text-red-600">
              Logout
            </button>
          </>
        )}
        {!token && (
          <>
            <Link to="/login" className="text-pink-800">
              Login
            </Link>
            <Link to="/register" className="text-pink-800">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
