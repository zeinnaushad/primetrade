import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  function change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function send(e) {
    e.preventDefault();
    if (!data.name || !data.email || !data.password) {
      setMsg("All fields required");
      return;
    }
    try {
      let r = await axios.post(
        "http://localhost:5000/api/auth/register",
        data
      );
      localStorage.setItem("token", r.data.token);
      localStorage.setItem("user", JSON.stringify(r.data.user));
      setMsg("");
      nav("/dashboard");
    } catch (e2) {
      setMsg("Error");
    }
  }

  return (
  <div className="w-full flex justify-center">
    <div className="bg-white p-6 rounded border border-pink-200 w-full max-w-sm">
        <h2 className="text-center text-pink-600 text-xl mb-4">Register</h2>
        {msg && <p className="text-red-500 text-xs mb-2">{msg}</p>}
        <form onSubmit={send} className="space-y-3">
          <input
            name="name"
            placeholder="Name"
            onChange={change}
            className="w-full border border-pink-300 rounded p-2 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={change}
            className="w-full border border-pink-300 rounded p-2 text-sm"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={change}
            className="w-full border border-pink-300 rounded p-2 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded text-sm"
          >
            Register
          </button>
        </form>
        <p className="text-xs text-center mt-3">
          Have an account?{" "}
          <Link to="/login" className="text-pink-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
