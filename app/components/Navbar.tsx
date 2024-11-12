import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logout from "./Logout";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <nav className="flex justify-between items-center gap-10 px-40 py-5">
      <Link href="/" className="font-bold text-white text-md">
        Home
      </Link>
      <div className="font-semibold text-white text-md flex justify-between items-center gap-5">
        <Link href="/client-component">Client</Link>
        {session?.user?.email && <Link href="/server">Server</Link>}
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        {!session?.user ? (
          <Link
            href="/sign-in"
            className="bg-cyan-600 rounded-md py-2 px-5 hover:bg-cyan-700 cursor-pointer transition-all ease-in-out"
          >
            <button type="submit" className="text-white font-semibold text-md">
              Login
            </button>
          </Link>
        ) : (
          <>
            <div className="flex justify-center items-center gap-2">
              {session?.user?.name}
              {session?.user?.image && (
                <Image
                  src={session?.user?.image || ""}
                  alt="avatar"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              )}
              <div>
                <Logout />
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
