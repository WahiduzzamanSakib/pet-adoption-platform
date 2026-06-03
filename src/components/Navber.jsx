import Image from "next/image";
import Link from "next/link";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FaHome, FaPaw } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full  shadow-lg">
                        <Image
                            src="https://i.ibb.co/ns6LHjvF/Untitled-design.png"
                            alt="Pet Adoption Logo"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-slate-900">
                            Pet Adoption
                        </h1>
                    </div>
                </Link>


                <nav className="hidden items-center gap-10 md:flex">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-medium text-slate-700 transition hover:text-orange-500"
                    >
                        <FaHome className="text-lg" />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/pets"
                        className="flex items-center gap-2 font-medium text-slate-700 transition hover:text-orange-500"
                    >
                        <FaPaw className="text-lg" />
                        <span>All Pets</span>
                    </Link>
                </nav>


                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="flex gap-2 items-center rounded-lg border border-slate-300 px-5 py-2.5 font-medium text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
                    >
                      <CiLogin size={20}/>  Login
                    </Link>

                    <Link
                        href="/register"
                        className="flex gap-2 items-center rounded-lg bg-orange-500 px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-orange-600"
                    >
                      <CiLogout  size={20}/>  Register
                    </Link>
                </div>
            </div>
        </header>
    );
}