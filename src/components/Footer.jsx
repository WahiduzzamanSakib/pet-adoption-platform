import React from "react";
import {
    FaArrowRight,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
   

    return (
        <footer className="bg-gray-900 text-gray-300 font-sans px-6 md:px-10 pt-16 pb-6 mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">


                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-2xl font-bold flex items-center gap-2">
                        🐾 Pet Adoption Platform
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        Connecting compassionate hearts with animals in need. We promote
                        responsible pet ownership and support animal shelters worldwide.
                    </p>
                </div>


                <div className="flex flex-col gap-3">
    <h4 className="text-white text-lg font-semibold tracking-wide">
        Quick Links
    </h4>

    <ul className="flex flex-col gap-2.5">
        {[
            { href: "/browse", label: "Find a Pet" },
            { href: "/about", label: "Our Mission" },
            { href: "#", label: "Partner Shelters" },
            { href: "#", label: "How to Help" },
        ].map((link) => (
            <li key={link.label}>
                <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >

                    <FaArrowRight
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xs"
                        />
                        {link.label}
                </a>
            </li>
        ))}
    </ul>
</div>


                <div className="flex flex-col gap-3">
                    <h4 className="text-white text-lg font-semibold tracking-wide">
                        Contact Us
                    </h4>
                    <p className="text-gray-400 text-sm">
                        📍 1044 Adoption Way, Suite 100
                    </p>
                    <p className="text-gray-400 text-sm">📞 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">
                        ✉️ support@petadoptionplatform.com
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-white text-lg font-semibold tracking-wide">
                        Follow Us
                    </h4>

                    <div className="flex gap-3 mt-1.5">
                        <a
                            href="https://facebook.com"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                        >
                            <FaFacebookF size={18} />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-200"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://x.com"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-black hover:text-white transition-all duration-200"
                        >
                            <FaXTwitter size={18} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-200"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>
            </div>


            <hr className="border-gray-800 my-8 max-w-6xl mx-auto" />

            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-xs text-center sm:text-left">
                    &copy; 2026 Pet Adoption Platform. All rights reserved.
                </p>

                <div className="flex gap-4 items-center text-xs text-gray-500">
                    <a href="/privacy" className="hover:text-gray-300 transition-colors">
                        Privacy Policy
                    </a>
                    <span className="text-gray-700">|</span>
                    <a href="/terms" className="hover:text-gray-300 transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}