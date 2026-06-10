"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
                console.log("asf", data)
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
            <h2 className="text-2xl font-bold mb-4">My Listing</h2>

            {loading && (
                 <div className="min-h-screen flex items-center justify-center">
            <div className="loader"></div>
        </div>
            )}

            {error && (
                <p className="text-red-500">{error}</p>
            )}

            {!loading && pets.length === 0 && (
                <p className="text-gray-500">No listings found</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                {pets.map((pet) => (
                    <div key={pet._id} className="max-w-6xl mx-auto py-10 px-4">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">

                                {/* Image Section */}
                                <div className="bg-gray-50 flex items-center justify-center p-6">
                                    <Image
                                        src={pet.imageUrl}
                                        alt={pet.petName}
                                        width={500}
                                        height={500}
                                        unoptimized
                                        className="rounded-xl object-cover w-full h-[400px]"
                                    />
                                </div>

                                {/* Details Section */}
                                <div className="p-6 md:p-10 flex flex-col gap-6">

                                    {/* Title */}
                                    <div>
                                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                            {pet.petName}
                                        </h1>
                                    </div>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        <Chip color="primary">{pet.Species}</Chip>
                                        <Chip color="success">{pet.healthStatus}</Chip>
                                        <Chip color="warning">{pet.vaccinationStatus}</Chip>
                                    </div>

                                    {/* Info Grid */}
                                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl">
                                        <p><span className="font-bold">Breed:</span> {pet.breed}</p>
                                        <p><span className="font-bold">Age:</span> {pet.age}</p>
                                        <p><span className="font-bold">Gender:</span> {pet.gender}</p>
                                        <p><span className="font-bold">Location:</span> {pet.location}</p>

                                        <p className="col-span-2">
                                            <span className="text-md font-bold">Adoption Fee:</span>{" "}
                                            <span className="text-green-600 font-semibold">
                                                ${pet.adoptionFee}
                                            </span>
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">About</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {pet.description}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">

                                        <div className="flex sm:flex-row gap-3 w-full">

                                            <Link href={`/pets/edit/${pet._id}`} className="flex-1">
                                                <Button
                                                    variant="secondary"
                                                    size="md"
                                                    className="w-full p-4 font-bold"
                                                >
                                                    Edit
                                                </Button>
                                            </Link>

                                            <Button
                                                variant="danger"
                                                size="md"
                                                className="w-full"
                                                onClick={() => handleDelete(pet._id)}
                                            >
                                                <TrashBin /> Delete
                                            </Button>

                                        </div>

                                        <Button color="success" size="lg" className="w-full">
                                            Adopt Now
                                        </Button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}