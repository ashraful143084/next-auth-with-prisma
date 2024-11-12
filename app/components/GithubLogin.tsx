"use client";
import { login } from "@/action/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubLogin = () => {
  return (
    <div
      className="flex items-center justify-center gap-2 bg-cyan-700 px-3 py-2 rounded-sm cursor-pointer"
      onClick={() => login("github")}
    >
      <FaGithub />
      <h1>Login with Github</h1>
    </div>
  );
};

export default GithubLogin;
