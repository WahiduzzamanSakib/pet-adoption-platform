"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaVenusMars,
  FaPaw,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import Image from "next/image";

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

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPets = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/pets?search=${search}&species=${species}&sort=${sort}`
      );

      const data = await res.json();
      setPets(data);
    } catch (error) {
      console.log("Failed to fetch pets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [search, species, sort]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 py-10 bg-white dark:bg-gray-950 min-h-screen"
    >
     
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        🐾 Available Pets for Adoption
      </h1>

      
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-md border dark:border-gray-700 mb-5"
      >
        <div>
          <label className="block text-sm font-medium mb-2">
            Search Pet
          </label>
          <input
            type="text"
            placeholder="Enter pet name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Species
          </label>
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:text-white"
          >
            <option value="">All Species</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="rabbit">Rabbit</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Sort By
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:text-white"
          >
            <option value="">Default</option>
            <option value="petName">Name (A-Z)</option>
            <option value="-petName">Name (Z-A)</option>
          </select>
        </div>
      </motion.div>

     
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
           <div className="loader"></div>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pets.map((pet) => (
            <motion.div
              key={pet._id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border dark:border-gray-700 overflow-hidden"
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
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FaPaw className="text-pink-500" />
                  {pet.petName}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {pet.description}
                </p>

                <div className="space-y-2 text-sm">
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
                  className="block w-full mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl text-center font-semibold hover:scale-[1.03] transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AllPets;