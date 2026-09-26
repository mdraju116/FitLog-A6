
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <div className="bg-black shadow-md mt-10">
            <hr  className="text-[#292b28]"/>

           <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8 sm:px-16 lg:flex-row lg:justify-between lg:px-24">
               <div className="flex items-center">
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

               <p className="text-[12px] text-[#6b7280] font-normal">© 2026 FitLog — Workout Library. Train hard, log honest.</p>


            </div>
            
        </div>
    );
};

export default Footer;