"use client";
import { logout } from "@/action/auth";
import React from "react";

const Logout = () => {
  return (
    <div
      onClick={() => logout()}
      className="cursor-pointer bg-cyan-700 px-4 py-1 rounded-md"
    >
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
