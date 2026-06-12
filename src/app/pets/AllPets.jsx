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

const AllPets = () => {
  const [pets, setPets] = useState([]);

  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [sort, setSort] = useState("");

  const fetchPets = async () => {
    const res = await fetch(
      `http://localhost:5000/pets?search=${search}&species=${species}&sort=${sort}`
    );
    const data = await res.json();
    setPets(data);
  };

  useEffect(() => {
    fetchPets();
  }, [search, species, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-white dark:bg-gray-950 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        🐾 Available Pets for Adoption
      </h1>

      {/* FILTER BOX */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-md border dark:border-gray-700 mb-5">

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search Pet
          </label>
          <input
            type="text"
            placeholder="Enter pet name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Species
          </label>
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          >
            <option value="">All Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sort By
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          >
            <option value="">Default</option>
            <option value="petName">Name (A-Z)</option>
            <option value="-petName">Name (Z-A)</option>
          </select>
        </div>

      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border dark:border-gray-700 overflow-hidden
            transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
          >
           
            <div className="relative">
           

<div className="relative w-full h-60">
  <Image
    src={pet.imageUrl}
    alt={pet.petName}
    fill
    className="object-cover transition-transform duration-300 hover:scale-105"
  />
</div>
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
          </div>
        ))}

      </div>

    </div>
  );
};

export default AllPets;