"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import api from "@/lib/api";

export default function Dashboard() {

  const router = useRouter();

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const fetchTasks = async () => {

    try {

      const res = await api.get(
        "tasks/",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      setTasks(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {

    try {

      await api.post(
        "tasks/",
        {
          title,
          description,
          completed: false,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      fetchTasks();

    } catch (err) {

      console.log(err);
    }
  };

  const deleteTask = async (
    id: number
  ) => {

    await api.delete(
      `tasks/${id}/`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    fetchTasks();
  };

  const handleLogout = () => {

    localStorage.removeItem("token");

    router.push("/login");
  };

  return (

    <div className="p-10">

      <div className="flex justify-between items-center mb-5">

  <h1 className="text-3xl font-bold">
    Dashboard
  </h1>

  <button
    className="bg-red-500 text-white px-4 py-2 rounded"
    onClick={handleLogout}
  >
    Logout
  </button>

</div>

      <div className="flex flex-col gap-2 max-w-md">

        <input
          className="border p-2"
          placeholder="Task title"
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          className="border p-2"
          placeholder="Description"
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <button
          className="bg-black text-white p-2"
          onClick={createTask}
        >
          Create Task
        </button>
      </div>

      <div className="mt-10">

        {tasks.map((task: any) => (

          <div
            key={task.id}
            className="border p-4 mb-3"
          >

            <h2 className="font-bold">
              {task.title}
            </h2>

            <p>
              {task.description}
            </p>

            <button
              className="bg-red-500 text-white px-3 py-1 mt-2"
              onClick={() =>
                deleteTask(task.id)
              }
            >
              Delete
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}