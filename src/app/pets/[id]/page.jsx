import React from "react";
import Link from "next/link";
import {
    Card,
    Button,
    Chip,
} from "@heroui/react";
import Image from "next/image";
import { TrashBin } from "@gravity-ui/icons";

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/pets/${id}`, {
        cache: "no-store",
    });

    const pet = await res.json();

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
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
                            {/* <p className="text-gray-500 mt-1">
                                {pet.breed} • {pet.age} • {pet.gender}
                            </p> */}
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
                                <span className="text-green-600 font-semibold">${pet.adoptionFee}</span>
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


                            {/* Secondary Actions */}
                            <div className="flex  sm:flex-row gap-3 ">

                                <Link href={`/pets/edit/${pet._id}`} className="flex-1 ">
                                    <Button variant="secondary" size="md" className="w-full p-4 font-bold">
                                        Edit
                                    </Button>
                                </Link>
                                <Link href={`/pets/edit/${pet._id}`} className="flex-1">
                                    <Button variant="danger" size="md" className="w-full">
                                       <TrashBin />  Delete
                                    </Button>
                                </Link>
                            </div>

                            {/* Primary Action */}
                            <Button color="success" size="lg" className="w-full">
                                Adopt Now
                            </Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;