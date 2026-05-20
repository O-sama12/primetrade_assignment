"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import api from "@/lib/api";

import Link from "next/link";

export default function RegisterPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      await api.post(
        "auth/register/",
        {
          username,
          email,
          password,
        }
      );

      alert("Registration successful");

      router.push("/login");

    } catch (err) {

      console.log(err);

      alert("Registration failed");
    }
  };

  return (

    <div className="p-10 flex flex-col gap-4 max-w-md">

      <h1 className="text-2xl font-bold">
        Register
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
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
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
        onClick={handleRegister}
      >
        Register
      </button>

      <Link href="/login">
      <button className="bg-black text-white p-2">
        Login
      </button>
      </Link>

    </div>
  );
}