import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const ClientComponent = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <main className="flex flex-col justify-center items-center gap-5 w-full h-screen">
      <h1>ClientComponent Page</h1>
      <p>{session?.user?.email}</p>
    </main>
  );
};

export default ClientComponent;
