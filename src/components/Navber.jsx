"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaDog,
  FaClipboardList,
  FaPlusCircle,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaListUl,
} from "react-icons/fa";

import { IoIosPersonAdd } from "react-icons/io";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const closeMenu = () => setMenuOpen(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Click outside avatar dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".avatar-dropdown")) {
        setAvatarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } finally {
      setAvatarOpen(false);
      window.location.href = "/login";
    }
  };

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  const navClass = (path) =>
    `flex items-center gap-1 transition-colors ${
      isActive(path)
        ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1"
        : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
    }`;

  const mobileNavClass = (path) =>
    `flex items-center gap-2 transition-colors ${
      isActive(path)
        ? "text-orange-500 font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-800 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

    
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={closeMenu}
        >
          <Image
            // src="https://i.ibb.co/ns6LHjvF/Untitled-design.png"
             src="/Untitled-design.png"
            alt="Pet Adoption Logo"
            width={40}
            height={40}
            priority
            className="rounded-full sm:w-[45px] sm:h-[45px]"
          />
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500 dark:text-orange-400">
            Pet Adoption
          </span>
        </Link>

        
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base font-medium">
          <li><Link href="/" className={navClass("/")}> <FaHome /> Home </Link></li>
          <li><Link href="/pets" className={navClass("/pets")}> <FaDog /> All Pets </Link></li>
          <li><Link href="/requests" className={navClass("/requests")}> <FaClipboardList /> Requests </Link></li>
          <li><Link href="/my-listings" className={navClass("/my-listings")}> <FaListUl /> My Listing </Link></li>
          <li><Link href="/add-pet" className={navClass("/add-pet")}> <FaPlusCircle /> Add Pet </Link></li>
        </ul>

        
        <div className="flex items-center gap-3">

        
          <ThemeToggle />

        
          <div className="hidden md:flex items-center gap-3 relative">

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-orange-500"
                >
                  <FaSignInAlt /> Login
                </Link>

                <Link
                  href="/signup"
                  className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full"
                >
                  <IoIosPersonAdd size={18} />
                  Get Started
                </Link>
              </>
            ) : (
              <div className="relative avatar-dropdown">
                <button onClick={() => setAvatarOpen(!avatarOpen)}>
                  <Avatar className="w-14 h-14 cursor-pointer shadow-md">
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>
                      {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                  </Avatar>
                </button>

                {avatarOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
                    <Link
                      href="/dashboard"
                      onClick={() => setAvatarOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t bg-white dark:bg-gray-900 dark:border-gray-800 px-4 py-4 space-y-3 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className={mobileNavClass("/")}> <FaHome /> Home </Link>
        <Link href="/pets" className={mobileNavClass("/pets")}> <FaDog /> All Pets </Link>
        <Link href="/requests" className={mobileNavClass("/requests")}> <FaClipboardList /> Requests </Link>
        <Link href="/my-listings" className={mobileNavClass("/my-listings")}> <FaListUl /> My Listing </Link>
        <Link href="/add-pet" className={mobileNavClass("/add-pet")}> <FaPlusCircle /> Add Pet </Link>

        <hr className="border-gray-200 dark:border-gray-700" />

        {!user ? (
          <>
            <Link href="/login" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <FaSignInAlt /> Login
            </Link>

            <Link
              href="/signup"
              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full w-fit"
            >
              <IoIosPersonAdd /> Get Started
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-300">
              Dashboard
            </Link>

            <button onClick={handleLogout} className="text-red-500 flex items-center gap-2">
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}