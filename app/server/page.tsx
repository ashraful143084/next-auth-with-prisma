import { auth } from "@/auth";
import React from "react";

const Server = async () => {
  const session = await auth();
  return (
    <main>
      <h1>Server Page</h1>
      <p>{session?.user?.email}</p>
    </main>
  );
};

export default Server;
