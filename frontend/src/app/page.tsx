import Link from "next/link";

export default function Home() {

  return (

    <div className="min-h-screen flex flex-col items-center justify-center gap-5">

      <h1 className="text-4xl font-bold">
        Primetrade Assignment
      </h1>

      <div className="flex gap-4">

        <Link href="/login">

          <button className="bg-black text-white px-5 py-2 rounded">

            Login

          </button>

        </Link>

        <Link href="/register">

          <button className="bg-blue-500 text-white px-5 py-2 rounded">

            Register

          </button>

        </Link>

      </div>
    </div>
  );
}