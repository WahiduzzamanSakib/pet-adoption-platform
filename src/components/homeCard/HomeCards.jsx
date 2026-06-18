"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaVenusMars,
  FaPaw,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HomeCards = ({ pets = [] }) => {
  const [loading, setLoading] = useState(true);

  // simulate loading until props arrive
  useEffect(() => {
    if (pets && pets.length >= 0) {
      setLoading(false);
    }
  }, [pets]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        🐾 Available Pets for Adoption
      </h1>

    
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="loader"></div>
        </div>
      ) : (
        <>
        
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pets.slice(0, 6).map((pet) => (
              <motion.div
                key={pet._id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border dark:border-gray-700 overflow-hidden"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={pet.imageUrl}
                    alt={pet.petName}
                    fill
                    className="object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
                    {pet.Species}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                    <FaPaw className="text-pink-500" />
                    {pet.petName}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    {pet.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p className="flex items-center gap-2 font-bold">
                      <FaVenusMars className="text-blue-500" />
                      {pet.gender}
                    </p>

                    <p className="flex items-center gap-2 font-bold">
                      <MdHealthAndSafety className="text-green-600" />
                      {pet.vaccinationStatus}
                    </p>

                    <p className="flex items-center gap-2 font-bold">
                      <FaMapMarkerAlt className="text-red-500" />
                      {pet.location}
                    </p>
                  </div>

                  <Link
                    href={`/pets/${pet._id}`}
                    className="block w-full mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl font-semibold text-center transition-all duration-300 hover:from-indigo-600 hover:to-blue-500 hover:shadow-lg hover:scale-[1.03]"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

         
          <div className="flex justify-center mt-6">
            <Link
              href="/pets"
              className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow-md 
              hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
            >
              View All Pets
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeCards;