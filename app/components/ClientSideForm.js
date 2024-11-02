"use client";
import React from "react";
import { useAuth } from "@/hooks/useAuth/index";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const ClientSideForm = () => {
  const router = useRouter();
  const auth = useAuth();
  const handleSubmit = async () => {
    console.log(auth.role);
    deleteCookie("token", { path: "/" });
    router.push("/login");
    router.refresh();
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-black text-white mt-2 rounded-lg px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
};

export default ClientSideForm;
