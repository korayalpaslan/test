import React from "react";
import { useAuth } from "@/hooks/useAuth/index";
import ClientSideForm from "../components/ClientSideForm";
const page = async () => {
  const auth = await useAuth.fromServer();
  console.log(auth);

  if (auth.role === "admin") {
    return (
      <div className="h-screen absolute top-0 flex flex-col justify-center items-center w-full">
        <h1> Admin Page Dashboard (Protected Page)</h1>
        <ClientSideForm />
      </div>
    );
  }
  return (
    <div className="h-screen absolute top-0 flex flex-col justify-center items-center w-full">
      <h1> Standard User Page Dashboard (Protected Page)</h1>

      <ClientSideForm />
    </div>
  );
};

export default page;
