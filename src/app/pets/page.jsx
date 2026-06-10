
import Link from "next/link";
import React from "react";
import {
  FaVenusMars,
  FaPaw,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const AllPets = async () => {
  const res = await fetch("http://localhost:5000/pets", {
    cache: "no-store",
  });

  const pets = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        🐾 Available Pets for Adoption
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-2xl shadow-md border overflow-hidden
            transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={pet.imageUrl}
                alt={pet.petName}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
                {pet.Species}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FaPaw className="text-pink-500" />
                {pet.petName}
              </h2>

              <p className="text-gray-600 text-sm line-clamp-2">
                {pet.description}
              </p>

              {/* Info Grid */}
              <div className="space-y-2 text-sm text-gray-700">
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

              {/* Button */}
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