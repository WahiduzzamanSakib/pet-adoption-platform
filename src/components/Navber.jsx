"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMenu}>
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

        {/* Desktop / Tablet Nav */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base font-medium text-gray-700">
          <li>
            <Link href="/" className="flex items-center gap-1 lg:gap-2 hover:text-orange-500">
              <FaHome /> Home
            </Link>
          </li>

          <li>
            <Link href="/pets" className="flex items-center gap-1 lg:gap-2 hover:text-orange-500">
              <FaDog /> Pets
            </Link>
          </li>

          <li>
            <Link href="/requests" className="flex items-center gap-1 lg:gap-2 hover:text-orange-500">
              <FaClipboardList /> Requests
            </Link>
          </li>
          <li>
            <Link href="/my-listings" className="flex items-center gap-1 lg:gap-2 hover:text-orange-500">
              <FaListUl />   My Listing
            </Link>
          </li>

          <li>
            <Link href="/add-pet" className="flex items-center gap-1 lg:gap-2 hover:text-orange-500">
              <FaPlusCircle /> Add
            </Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Link
            href="/login"
            className="flex items-center gap-1 text-gray-700 hover:text-orange-500 text-sm lg:text-base"
          >
            <FaSignInAlt /> Login
          </Link>

          <Link
            href="/signup"
            className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-3 lg:px-5 py-2 rounded-full font-medium text-sm lg:text-base"
          >
            <IoIosPersonAdd size={18} /> Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3 text-gray-700">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
            <FaHome /> Home
          </Link>

          <Link href="/pets" onClick={closeMenu} className="flex items-center gap-2">
            <FaDog /> Pets
          </Link>

          <Link href="/requests" onClick={closeMenu} className="flex items-center gap-2">
            <FaClipboardList /> Requests
          </Link>

          <Link href="/my-listings" onClick={closeMenu} className="flex items-center gap-2">
            <FaListUl /> My Listing
          </Link>

          <Link href="/add-pet" onClick={closeMenu} className="flex items-center gap-2">
            <FaPlusCircle /> Add Pet
          </Link>

          <hr />

          <Link href="/login" onClick={closeMenu} className="flex items-center gap-2">
            <FaSignInAlt /> Login
          </Link>

          <Link
            href="/signup"
            onClick={closeMenu}
            className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-full w-fit"
          >
            <IoIosPersonAdd /> Get Started
          </Link>
        </div>
      )}
    </header>
  );
}