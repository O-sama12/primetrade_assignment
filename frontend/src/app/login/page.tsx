"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "@/lib/api";

export default function LoginPage() {
  
  const router = useRouter();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await api.post(
        "auth/login/",
        {
          username,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.access
      );

      alert("Login successful");
      router.push("/dashboard")

    } catch (err) {

      alert("Login failed");
    }
  };

  return (

    <div className="p-10 flex flex-col gap-4 max-w-md">

      <h1 className="text-2xl font-bold">
        Login
      </h1>

      <input
        className="border p-2"
        placeholder="Username"
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        className="border p-2"
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        className="bg-black text-white p-2"
        onClick={handleLogin}
      >
        Login
      </button>

      <Link href="/register">
          <button className = "bg-blue-500 text-white p-2">
          Register
          </button> 
      </Link>

    </div>
  );
}