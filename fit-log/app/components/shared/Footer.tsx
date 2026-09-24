
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <div className="bg-black shadow-md mt-10">
            <hr  className="text-[#292b28]"/>

            <div className="container mx-auto px-4 sm:px-16 lg:px-26 flex justify-between items-center py-8">
               <div className="flex items-center">
                <Image
                     src={logo}
                     alt="Navbar Logo"
                     className="rotate-90 w-7 h-7"
                />
                <Link href="/" className="btn btn-ghost text-lg sm:text-xl text-white" >
                        FITLOG
               </Link>
               </div>

               <p className="text-[12px] text-[#6b7280] font-normal">© 2026 FitLog — Workout Library. Train hard, log honest.</p>


            </div>
            
        </div>
    );
};

export default Footer;