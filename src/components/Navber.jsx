"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHealthNormal } from "react-icons/gi";

export default function Navber() {
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  const link = (
    <>
      <Link
        className={`${pathname === "/" ? "text-[#00A6FB] font-bold" : ""}`}
        href={"/"}
      >
        <li className="text-[16px] font-semibold hover:bg-gray-300 rounded px-3 py-1.5">
          Home
        </li>
      </Link>
      <Link
        className={`${pathname === "/appointment" ? "text-[#00A6FB] font-bold" : ""}`}
        href={"/appointment"}
      >
        <li className="text-[16px] font-semibold hover:bg-gray-300 rounded px-3 py-1.5">
          All Appointment
        </li>
      </Link>
      <Link
        className={`${pathname === "/dashboard" ? "text-[#00A6FB] font-bold" : ""}`}
        href={"/dashboard"}
      >
        <li className="text-[16px] font-semibold hover:bg-gray-300 rounded px-3 py-1.5">
          Dashboard
        </li>
      </Link>
    </>
  );

  return (
    <div className="bg-base-100 shadow py-2 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#00A6FB]">
            <span className="text-4xl mt-0.5">
              <GiHealthNormal />
            </span>
            <h1 className="text-2xl font-bold">DocAppoint</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          {user && (
            <>
              <Avatar size="lg">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user?.name.charAt(0)}
                  src={user?.image}
                  className="cursor-pointer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <button
                onClick={onSubmit}
                className="text-[16px] font-semibold bg-[#00A6FB] text-white px-4 py-2 rounded cursor-pointer"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <>
              <Link
                className="text-[16px] font-semibold border-1 cursor-pointer border-[#00A6FB] hover:bg-[#00A6FB] hover:text-white px-5 py-2 rounded"
                href={"/login"}
              >
                Login
              </Link>
              <Link
                className="text-[16px] font-semibold cursor-pointer bg-[#00A6FB] text-white px-4 py-2 rounded"
                href={"/register"}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
