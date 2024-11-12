import { auth } from "@/auth";
import React from "react";

const Middleware = async () => {
  const session = await auth();
  return (
    <main className="flex flex-col justify-center items-center gap-5 w-full h-screen">
      <h1>Middleware Page</h1>
      <p>{session?.user?.email}</p>
    </main>
  );
};

export default Middleware;
