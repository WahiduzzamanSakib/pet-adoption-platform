import React from "react";
import Image from "next/image";
import { FaCat } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

export default function CatHeroBanner() {
    return (
        <section className="relative bg-gradient-to-r from-rose-50 to-amber-100 overflow-hidden">

            <div className="absolute top-10 left-10 w-4 h-4 bg-amber-300 rounded-full opacity-50 animate-ping" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl">

                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-200/50 rounded-full">
                        <FaCat className="text-amber-700" />
                        Find Your Perfect Match
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                        Bringing Lifelong Feline Joy
                        <span className="text-amber-600"> To Your Home</span>
                    </h1>

                    <p className="text-lg text-slate-600 md:max-w-xl">
                        Thousands of affectionate cats are waiting for a loving home.
                        Give a rescued feline a second chance today.
                    </p>

                    <a
                        href="/browse-cats"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white bg-amber-600 hover:bg-amber-700 "
                    >
                        <FaPaw />
                        Adopt Now
                    </a>
                </div>


                <div className="flex-1 relative w-full max-w-md aspect-square">

                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-rose-300 rounded-full blur-2xl opacity-30 animate-pulse" />

                    <div className="relative w-90 h-90 md:w-104 md:h-104 mx-auto overflow-hidden rounded-2xl group">

                        <Image
                            src="/cat-in-sunset.webp"
                            alt="Cute rescue cat"
                            fill
                            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 animate-[pulse_6s_ease-in-out_infinite]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}