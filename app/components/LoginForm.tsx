import React from "react";
import AuthButton from "./AuthButton";
import { loginWithCreds } from "@/action/auth";

const LoginForm = () => {
  return (
    <div>
      <form
        action={loginWithCreds}
        className="flex flex-col justify-start items-center gap-5"
      >
        <div className="flex flex-col justify-start items-start gap-1">
          <label htmlFor="email" className="text-white text-md">
            Email
          </label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            className="bg-transparent w-full border-b border-white focus:border-none focus:border-white focus:shadow-none focus:inset-0"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <label htmlFor="email" className="text-white text-md">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            className="bg-transparent w-full border-b border-white focus:border-none focus:border-white focus:shadow-none focus:inset-0"
          />
        </div>
        <div>
          <AuthButton />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
