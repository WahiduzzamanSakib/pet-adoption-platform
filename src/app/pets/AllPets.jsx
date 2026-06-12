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

const AllPets = () => {
  const [pets, setPets] = useState([]);

  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [sort, setSort] = useState("");

  // 🔄 Fetch pets
  const fetchPets = async () => {
    const res = await fetch(
      `http://localhost:5000/pets?search=${search}&species=${species}&sort=${sort}`
    );
    const data = await res.json();
    setPets(data);
  };

  // ⏳ Auto fetch when filters change
  useEffect(() => {
    fetchPets();
  }, [search, species, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        🐾  Available Pets for Adoption
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-white rounded-2xl shadow-md border">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Pet
          </label>
          <input
            type="text"
            placeholder="Enter pet name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Species
          </label>
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          >
            <option value="">All Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Others">Others</option>
          </select>
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
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
            className="bg-white rounded-2xl shadow-md border overflow-hidden"
          >
            <img
              src={pet.imageUrl}
              alt={pet.petName}
              className="w-full h-60 object-cover"
            />

            <div className="p-5 space-y-2">

              <h2 className="text-xl font-bold flex items-center gap-2">
                <FaPaw className="text-pink-500" />
                {pet.petName}
              </h2>

              <p className="text-sm text-gray-600">
                {pet.description}
              </p>

              <p className="flex items-center gap-2">
                <FaVenusMars /> {pet.gender}
              </p>

              <p className="flex items-center gap-2">
                <MdHealthAndSafety /> {pet.vaccinationStatus}
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> {pet.location}
              </p>

              <Link
                href={`/pets/${pet._id}`}
                className="block text-center bg-blue-600 text-white py-2 rounded mt-3"
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