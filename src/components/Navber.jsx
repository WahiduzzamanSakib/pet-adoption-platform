"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    try {
      await authClient.signOut?.();
    } finally {
      setAvatarOpen(false);
    }
  };

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const navClass = (path) =>
    `flex items-center gap-1 transition-colors ${
      isActive(path)
        ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1"
        : "text-gray-700 hover:text-orange-500"
    }`;

  const mobileNavClass = (path) =>
    `flex items-center gap-2 transition-colors ${
      isActive(path)
        ? "text-orange-500 font-semibold"
        : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={closeMenu}
        >
          <Image
            src="https://i.ibb.co/ns6LHjvF/Untitled-design.png"
            alt="Pet Adoption Logo"
            width={40}
            height={40}
            priority
            className="rounded-full sm:w-[45px] sm:h-[45px]"
          />
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500">
            Pet Adoption
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base font-medium">
          <li>
            <Link href="/" className={navClass("/")}>
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link href="/pets" className={navClass("/pets")}>
              <FaDog />
              All Pets
            </Link>
          </li>

          <li>
            <Link href="/requests" className={navClass("/requests")}>
              <FaClipboardList />
              Requests
            </Link>
          </li>

          <li>
            <Link href="/my-listings" className={navClass("/my-listings")}>
              <FaListUl />
              My Listing
            </Link>
          </li>

          <li>
            <Link href="/add-pet" className={navClass("/add-pet")}>
              <FaPlusCircle />
              Add
            </Link>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3 relative">
          {!user ? (
            <>
              <Link
                href="/login"
                className="flex items-center gap-1 text-gray-700 hover:text-orange-500"
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
            <div className="relative">
              <button onClick={() => setAvatarOpen(!avatarOpen)}>
                <Avatar className="w-14 h-14 cursor-pointer shadow-md">
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </button>

              {avatarOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md overflow-hidden">
                  <Link
                    href="/dashboard"
                    onClick={() => setAvatarOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
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
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3">
          <Link
            href="/"
            onClick={closeMenu}
            className={mobileNavClass("/")}
          >
            <FaHome />
            Home
          </Link>

          <Link
            href="/pets"
            onClick={closeMenu}
            className={mobileNavClass("/pets")}
          >
            <FaDog />
            All Pets
          </Link>

          <Link
            href="/requests"
            onClick={closeMenu}
            className={mobileNavClass("/requests")}
          >
            <FaClipboardList />
            Requests
          </Link>

          <Link
            href="/my-listings"
            onClick={closeMenu}
            className={mobileNavClass("/my-listings")}
          >
            <FaListUl />
            My Listing
          </Link>

          <Link
            href="/add-pet"
            onClick={closeMenu}
            className={mobileNavClass("/add-pet")}
          >
            <FaPlusCircle />
            Add Pet
          </Link>

          <hr />

          {!user ? (
            <>
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex items-center gap-2"
              >
                <FaSignInAlt />
                Login
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-full w-fit"
              >
                <IoIosPersonAdd />
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                onClick={closeMenu}
                className="flex items-center gap-2"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-500 flex items-center gap-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}