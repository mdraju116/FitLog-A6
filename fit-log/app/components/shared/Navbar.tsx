
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
    const links = (
        <>
            <li>  <Link href="/">Workouts</Link></li>
            <li> <Link href="/myplan">My Plan</Link> </li>
        </>
    );

    return (
        <div className="bg-black shadow-md">
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

                    {/* Logo */}
                    <Image
                        src={logo}
                        alt="Navbar Logo"
                        className="rotate-90 w-7 h-7"
                    />

                    {/* Brand */}
                    <Link href="/" className="btn btn-ghost hover:bg-[#c2f800] hover:text-black text-lg sm:text-xl text-white" >
                        FITLOG
                    </Link>
                </div>

                {/* Tablet + Desktop Navigation */}
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal px-0 sm:gap-0 lg:gap-1">
                        {links}
                    </ul>
                </div>

                {/* Plan + Saved */}
                <div className="navbar-end">
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">

                        {/* Plan */}
                        <Link href="/myplan" className="text-sm font-medium text-white" >
                            Plan
                            <span className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-xs text-black font-bold">
                                3  {/* {planCount} */}
                            </span>
                        </Link>

                        {/* Saved */}
                        <Link href="/myplan" className="text-sm font-medium text-white" >
                            Saved
                            <span className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#4e5351] bg-black text-xs text-white font-bold">
                                5  {/* {savedCount} */}
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

