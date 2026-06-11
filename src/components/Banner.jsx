"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaw, FaHeart, FaPlus } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function PetHeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-100 overflow-hidden">
      {/* Animated Background Dot */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute top-10 left-10 w-4 h-4 bg-orange-300 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left space-y-6 max-w-2xl"
        >
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-800 bg-orange-200/50 rounded-full"
          >
            <FaHeart className="text-orange-600" />
            Adopt • Rescue • Love
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"
          >
            Find Your New
            <span className="text-orange-600"> Best Friend</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 md:max-w-xl"
          >
            Discover loving dogs, cats, birds, rabbits, and other pets
            waiting for their forever homes. Give a rescued pet a second
            chance and make a lifelong companion today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Adopt Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/pets"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30"
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring" }}
                  >
                    <FaPaw />
                  </motion.div>

                  <span>Adopt Now</span>
                </Link>
              </motion.div>

              {/* Add Pet Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/add-pet"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-orange-500 bg-white text-orange-600 font-semibold shadow-md"
                >
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaPlus />
                  </motion.div>

                  <span>Add Your Pet</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex-1 relative w-full max-w-md aspect-square"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-amber-300 rounded-full blur-3xl"
          />

          {/* Floating Image */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="relative w-92 h-92 md:w-106 md:h-106 mx-auto overflow-hidden rounded-2xl"
          >
            <Image
              src="https://i.ibb.co/qMBrg0HW/cat-in-sunset.webp"
              alt="Cute rescue cat"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}