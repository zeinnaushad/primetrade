import { useEffect, useState } from "react";

function Profile() {
  const [data, setData] = useState({ name: "", email: "" });
  const [msg, setMsg] = useState("");

  async function load() {
    let t = localStorage.getItem("token");
    let r = await fetch("http://localhost:5000/api/profile/me", {
      headers: { Authorization: "Bearer " + t },
    });
    let d = await r.json();
    setData({ name: d.name || "", email: d.email || "" });
  }

  useEffect(() => {
    load();
  }, []);

  async function save(e) {
    e.preventDefault();
    let t = localStorage.getItem("token");
    await fetch("http://localhost:5000/api/profile/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + t },
      body: JSON.stringify({ name: data.name }),
    });
    setMsg("Saved");
    setTimeout(() => setMsg(""), 2000);
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded border border-pink-200">
      <h2 className="text-pink-700 text-xl mb-2">Profile</h2>
      {msg && <p className="text-xs text-green-600 mb-2">{msg}</p>}
      <form onSubmit={save} className="space-y-3">
        <input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full border border-pink-300 rounded p-2 text-sm"
          placeholder="Name"
        />
        <input
          value={data.email}
          disabled
          className="w-full border border-pink-300 rounded p-2 text-sm bg-gray-100"
        />
        <button className="bg-pink-500 text-white px-4 py-2 rounded text-sm">
          Save
        </button>
      </form>
    </div>
  );
}

export default Profile;
