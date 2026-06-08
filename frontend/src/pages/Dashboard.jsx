import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
useEffect(() => {

  const token =
    localStorage.getItem("token");

  if (!token) {
    navigate("/");
    return;
  }

  fetchTasks();

}, []);
  const fetchTasks = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const res = await API.get(
        "/tasks",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      await API.post(
        "/tasks",
        {
          ...form,
          status: "pending",
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setForm({
        title: "",
        description: "",
      });

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteTask = async (id) => {

  try {

    const token =
      localStorage.getItem("token");

    await API.delete(
      `/tasks/${id}`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    fetchTasks();

  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="container">
      <button onClick={logout}>
  Logout
</button>
      <h1>Dashboard</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="Task Title"
          value={form.title}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <br /><br />

        <button>
          Create Task
        </button>

      </form>

      <hr />

      {tasks.map((task) => (

        <div
  key={task._id}
  className="task"
>

          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>{task.status}</p>

<button
  onClick={() =>
    deleteTask(task._id)
  }
>
  Delete
</button>

<hr />

        </div>

      ))}

    </div>
  );
}

export default Dashboard;