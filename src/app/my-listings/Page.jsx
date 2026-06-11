"use client";

import { DeletedAlert } from "@/components/DeletedAlert";
import { EditModal } from "@/components/EditModal";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaVenusMars } from "react-icons/fa";
import { FaPaw } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";

export default function MyListing() {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { data: session } = authClient.useSession();
    const email = session?.user?.email;

    useEffect(() => {
        if (!email) return;

        async function fetchPets() {
            try {
                setLoading(true);
                setError("");

                const res = await fetch(
                    `http://localhost:5000/pets/user/${email}`
                );

                if (!res.ok) throw new Error("Failed to fetch pets");

                const data = await res.json();
                setPets(Array.isArray(data) ? data : []);
            } catch (err) {
                setError(err.message || "Something went wrong");
                setPets([]);
            } finally {
                setLoading(false);
            }
        }

        fetchPets();
    }, [email]);



    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-center text-3xl font-bold  mb-8"> 🐾 My Listing Pets for Adoption</h2>

            {loading && (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="loader"></div>
                </div>
            )}

            {error && <p className="text-red-500">{error}</p>}

            {!loading && pets.length === 0 && (
                <p className="text-gray-500 text-center text-2xl font-bold">No listings found</p>
            )}


            <div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pets.map((pet) => (
                        <div
                            key={pet._id}
                            className="bg-white rounded-2xl shadow-md border overflow-hidden
      transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
                        >

                            <div className="relative">
                                <img
                                    src={pet.imageUrl || "/default-pet.png"}
                                    alt={pet.petName}
                                    className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                                />

                                <span className="absolute top-3 left-3 bg-green-500 text-white text-md px-3 py-1 rounded-full shadow">
                                    {pet.Species}
                                </span>


                                <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                                    $ {pet.adoptionFee}
                                </span>
                            </div>


                            <div className="p-5 space-y-3">

                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <FaPaw className="text-pink-500" />
                                    {pet.petName}
                                </h2>


                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {pet.description}
                                </p>


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


                                <div className="grid grid-cols-2 gap-2 pt-3">

                                    <button
                                    
                                        onClick={() => handleOpenRequests(pet)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-2 rounded-lg font-semibold transition"
                                    >
                                        Requests
                                    </button>

                                    <EditModal petData={pet} />

                                    <Link
                                    variant="tertiary"
                                        href={`/pets/${pet._id}`}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-lg font-semibold text-center transition"
                                    >
                                        View
                                    </Link>


                                   <DeletedAlert petData={pet}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}