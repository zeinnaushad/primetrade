import { useEffect, useState } from "react";

function Dashboard() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState({ title: "", desc: "" });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  async function load() {
    let t = localStorage.getItem("token");
    let r = await fetch(
      "http://localhost:5000/api/tasks?search=" + search + "&status=" + filter,
      {
        headers: { Authorization: "Bearer " + t },
      }
    );
    let d = await r.json();
    setList(d);
  }

  useEffect(() => {
    load();
  }, [search, filter]);

  async function add(e) {
    e.preventDefault();
    let t = localStorage.getItem("token");
    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + t,
      },
      body: JSON.stringify({
        title: task.title,
        description: task.desc,
      }),
    });
    setTask({ title: "", desc: "" });
    load();
  }

  async function changeStatus(id, v) {
    let t = localStorage.getItem("token");
    await fetch("http://localhost:5000/api/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + t,
      },
      body: JSON.stringify({ status: v }),
    });
    load();
  }

  async function del(id) {
    let t = localStorage.getItem("token");
    await fetch("http://localhost:5000/api/tasks/" + id, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + t },
    });
    load();
  }

  return (
    <div>
      <h2 className="text-pink-700 text-2xl mb-4">Dashboard</h2>

      <div className="flex gap-2 mb-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-pink-300 rounded p-2 flex-1 text-sm"
          placeholder="Search..."
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-pink-300 rounded p-2 text-sm"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <form
        onSubmit={add}
        className="bg-white p-4 rounded border border-pink-200 mb-4"
      >
        <input
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full border border-pink-300 rounded p-2 mb-2 text-sm"
          placeholder="Title"
        />
        <textarea
          value={task.desc}
          onChange={(e) => setTask({ ...task, desc: e.target.value })}
          className="w-full border border-pink-300 rounded p-2 mb-2 text-sm"
          placeholder="Description"
        />
        <button className="bg-pink-500 text-white px-4 py-2 rounded text-sm">
          Add
        </button>
      </form>

      {list.map((x) => (
        <div
          key={x._id}
          className="bg-white p-3 border border-pink-200 rounded mb-2 flex justify-between"
        >
          <div>
            <h4 className="text-pink-700 font-semibold">{x.title}</h4>
            <p className="text-sm">{x.description}</p>
          </div>
          <div className="text-right">
            <select
              value={x.status}
              onChange={(e) => changeStatus(x._id, e.target.value)}
              className="border border-pink-300 rounded p-1 text-xs mb-1"
            >
              <option value="pending">pending</option>
              <option value="in-progress">in-progress</option>
              <option value="done">done</option>
            </select>
            <button
              onClick={() => del(x._id)}
              className="text-red-500 text-xs block"
            >
              delete
            </button>
          </div>
        </div>
      ))}
      {list.length === 0 && (
        <p className="text-xs text-pink-800">No tasks yet.</p>
      )}
    </div>
  );
}

export default Dashboard;
