
"use client";

import { usePathname, } from "next/navigation";
import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutContext";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();

    const links = (
        <>
            <Link href={pathname === "/" ? "#library" : "/"} className={`rounded-2xl px-3 py-2 text-sm font-medium transition ${pathname === "/"
                ? "bg-[#c2f800]/10 text-[#c2f800]"
                : "text-white hover:bg-[#c2f800]/10 hover:text-[#c2f800]"
                }`}
            > Workouts </Link>

            <Link href="/myplan" className={`rounded-2xl px-3 py-2 text-sm font-medium transition  ${pathname === "/myplan"
                ? "bg-[#c2f800]/10 text-[#c2f800]"
                : "text-white hover:bg-[#c2f800]/10 hover:text-[#c2f800]"
                }`}
            >  My Plan </Link>

        </>
    );

    const { addToPlan, saveToLater } = useContext(WorkoutContext);



    return (
        <div className="bg-black shadow-md sticky top-0 z-50 bg-[#111318]">
            <div className="navbar container mx-auto px-4 sm:px-16 lg:px-24">

                {/* Navbar Start */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown sm:hidden ">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost text-white "
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        {/* Dropdown */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-zinc-900 text-white rounded-box z-50 mt-3 w-52 p-2 shadow-xl"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo & Brand */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-lg px-2 py-1 text-lg font-bold text-white transition hover:bg-[#c2f800]/10 hover:text-[#c2f800] sm:text-xl"
                    >
                        {/* Logo */}
                        <Image
                            src={logo}
                            alt="Navbar Logo"
                            className="h-7 w-7 rotate-90"
                        />

                        {/* Brand */}
                        <span>FITLOG</span>
                    </Link>

                </div>

                {/* Tablet + Desktop Navigation */}
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal px-0 sm:gap-0 lg:gap-4">
                        {links}
                    </ul>
                </div>

                {/* Plan + Saved */}
                <div className="navbar-end">
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">

                        {/* Plan */}
                        <Link
                            href="/myplan"
                            className="text-sm font-medium text-white hover:bg-[#c2f800]/10 hover:text-[#c2f800] rounded-2xl  px-3 py-2"
                        >
                            Plan
                            <span className="ml-1 inline-flex min-w-6 h-6 items-center justify-center rounded-full bg-[#ccff00] px-1 text-xs font-bold text-black">
                                {addToPlan.length}
                            </span>
                        </Link>

                        {/* Saved */}
                        <Link
                            href="/myplan?tab=saved"
                            className="text-sm font-medium text-white hover:bg-[#c2f800]/10 hover:text-[#c2f800] rounded-2xl  px-3 py-2"
                        >
                            Saved
                            <span className="ml-1 inline-flex min-w-6 h-6 items-center justify-center rounded-full border border-[#4e5351] bg-black px-1 text-xs font-bold text-white">
                                {saveToLater.length}
                            </span>
                        </Link>

                    </div>
                </div>

            </div>

            <hr className="text-[#292b28]" />

        </div>
    );
};

export default Navbar;

