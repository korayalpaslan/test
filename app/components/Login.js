"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { setCookie } from "cookies-next";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    const { success, token } = await res.json();
    if (success) {
      setCookie("token", token, { maxAge: 60 * 6 * 24 });
      const nextUrl = searchParams.get("next");
      // @see: https://github.com/vercel/next.js/discussions/44149
      router.push(nextUrl ?? "/dashboard");
      router.refresh();
    } else {
      // Make your shiny error handling with a great user experience
      alert("Login failed");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label>
        Username:
        <input type="text" name="username" className="border border-gray-400" />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          className="border border-gray-400"
        />
      </label>
      <button
        type="submit"
        className="bg-black text-white mt-2 rounded-lg px-4 py-2"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
