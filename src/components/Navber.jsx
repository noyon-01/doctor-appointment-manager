"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHealthNormal } from "react-icons/gi";

export default function Navber() {
    const pathname = usePathname()

  const link = (
    <>
      <Link className={`${pathname === '/' ? 'text-[#00A6FB] font-bold' : ''}`} href={"/"}>
        <li className="text-[16px] font-semibold">
          <a href="/">Home</a>
        </li>
      </Link>
      <Link className={`${pathname === '/appointment' ? 'text-[#00A6FB] font-bold' : ''}`} href={"/appointment"}>
        <li className="text-[16px] font-semibold">
          <a href="/appointment">All Appointment</a>
        </li>
      </Link>
      <Link className={`${pathname === '/deshboard' ? 'text-[#00A6FB] font-bold' : ''}`} href={"/deshboard"}>
        <li className="text-[16px] font-semibold">
          <a href="/deshboard">Dashboard</a>
        </li>
      </Link>
    </>
  );

  return (
    <div className="bg-base-100 shadow py-2 sticky top-0">
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
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
          <Link className="text-[16px] font-semibold border-1 border-[#00A6FB] hover:bg-[#00A6FB] hover:text-white px-5 py-2 rounded" href={"/login"}>
            Login
          </Link>
          <Link className="text-[16px] font-semibold bg-[#00A6FB] text-white px-4 py-2 rounded" href={"/logout"}>
            Logout
          </Link>
          <Link className="text-[16px] font-semibold bg-[#00A6FB] text-white px-4 py-2 rounded" href={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
