"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
    FaArrowRight,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const pathname = usePathname();

    if (pathname.startsWith("/dashboard")) {
        return null;
    }

    const quickLinks = [
        { href: "/pets", label: "Find a Pet" },
        { href: "/aboutus", label: "Our Mission" },
        { href: "/#partner-shelters", label: "Partner Shelters" },
        { href: "/#help", label: "How to Help" },
    ];

    return (
        <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-700 dark:bg-[#182746]">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:px-6">

                {/* Brand */}
                <div className="flex min-w-0 flex-col gap-3">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                        🐾 Pet Adoption Platform
                    </h3>

                    <p className="max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        Connecting compassionate hearts with animals in need. We promote
                        responsible pet ownership and support animal shelters worldwide.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex min-w-0 flex-col gap-3">
                    <h4 className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">
                        Quick Links
                    </h4>

                    <ul className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-1 sm:gap-y-2.5">
                        {quickLinks.map((link) => (
                            <li key={link.label} className="min-w-0">
                                <a
                                    href={link.href}
                                    className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                    <FaArrowRight
                                        className="shrink-0 -translate-x-2 text-xs opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                    />
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="flex min-w-0 flex-col gap-3">
                    <h4 className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">
                        Contact Us
                    </h4>

                    <p className="break-words text-sm text-gray-500 dark:text-gray-400">
                        📍 1044 Adoption Way, Suite 100
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        📞 (555) 123-4567
                    </p>
                    <p className="break-all text-sm text-gray-500 dark:text-gray-400">
                        ✉️ support@petadoptionplatform.com
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex min-w-0 flex-col gap-3">
                    <h4 className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">
                        Follow Us
                    </h4>

                    <div className="mt-1.5 flex flex-wrap gap-3">
                        <a
                            href="https://facebook.com"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-200 hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300"
                        >
                            <FaFacebookF size={18} />
                        </a>

                        <a
                            href="https://instagram.com"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-200 hover:bg-pink-600 hover:text-white dark:bg-gray-800 dark:text-gray-300"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <a
                            href="https://x.com"
                            aria-label="X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-200 hover:bg-black hover:text-white dark:bg-gray-800 dark:text-gray-300"
                        >
                            <FaXTwitter size={18} />
                        </a>

                        <a
                            href="https://linkedin.com"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-200 hover:bg-blue-700 hover:text-white dark:bg-gray-800 dark:text-gray-300"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <hr className="mx-auto my-8 w-[calc(100%-2rem)] max-w-6xl border-slate-200 dark:border-slate-700" />

            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left lg:px-6">
                <p className="text-xs text-gray-500">
                    &copy; 2026 Pet Adoption Platform. All rights reserved.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
                    <a
                        href="/privacy"
                        className="transition-colors hover:text-blue-500 dark:hover:text-white"
                    >
                        Privacy Policy
                    </a>

                    <span className="text-gray-400 dark:text-gray-600">|</span>

                    <a
                        href="/terms"
                        className="transition-colors hover:text-blue-500 dark:hover:text-white"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}