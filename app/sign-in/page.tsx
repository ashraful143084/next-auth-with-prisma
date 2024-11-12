import React from "react";
import GithubLogin from "../components/GithubLogin";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-screen pt-20">
      <section className="flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold pb-20">Sign In</h1>
        <GithubLogin />
      </section>
    </div>
  );
};

export default SignIn;
