import React from "react";
import Image from "next/image";
import { FaPaw, FaHeart } from "react-icons/fa";

export default function PetHeroBanner() {
    return (
        <section className="relative bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-100 overflow-hidden">

            <div className="absolute top-10 left-10 w-4 h-4 bg-orange-300 rounded-full opacity-50 animate-ping" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl">

                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-800 bg-orange-200/50 rounded-full">
                        <FaHeart className="text-orange-600" />
                        Adopt • Rescue • Love
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                        Find Your New
                        <span className="text-orange-600"> Best Friend</span>
                    </h1>

                    <p className="text-lg text-slate-600 md:max-w-xl">
                        Discover loving dogs, cats, birds, rabbits, and other pets
                        waiting for their forever homes. Give a rescued pet a second
                        chance and make a lifelong companion today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/pets"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300"
                        >
                            <FaPaw />
                            Adopt Now
                        </a>

                        <a
                            href="/about"
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-orange-600 text-orange-600 hover:bg-orange-50 transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                
                <div className="flex-1 relative w-full max-w-md aspect-square">

                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-amber-300 rounded-full blur-3xl opacity-30 animate-pulse" />

                    <div className="relative w-92 h-92 md:w-106 md:h-106 mx-auto overflow-hidden rounded-2xl group">
                        <Image
                           src="https://i.ibb.co/qMBrg0HW/cat-in-sunset.webp"
                            alt="Cute rescue cat" fill
                            className="object-cover transition-transform duration-1000 ease-in-out 
                            group-hover:scale-105 animate-[pulse_6s_ease-in-out_infinite]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}