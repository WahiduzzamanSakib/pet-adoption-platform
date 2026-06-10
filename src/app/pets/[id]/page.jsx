"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { TrashBin } from "@gravity-ui/icons";

export default function DetailsPage() {
  const { id } = useParams();

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`http://localhost:5000/pets/${id}`);
        const data = await res.json();

        setPet(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadData();
    }
  }, [id]);

  // ⏳ Loading UI
  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="loader"></div>
        </div>
    );
  }

  if (!pet) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl text-red-500">No Data Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">

          {/* Image */}
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

          {/* Details */}
          <div className="p-6 md:p-10 flex flex-col gap-6">

            <h1 className="text-3xl font-bold">
              {pet.petName}
            </h1>

            <div className="flex flex-wrap gap-2">
              <Chip color="primary">{pet.Species}</Chip>
              <Chip color="success">{pet.healthStatus}</Chip>
              <Chip color="warning">{pet.vaccinationStatus}</Chip>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-xl">
              <p><b>Breed:</b> {pet.breed}</p>
              <p><b>Age:</b> {pet.age}</p>
              <p><b>Gender:</b> {pet.gender}</p>
              <p><b>Location:</b> {pet.location}</p>
              <p className="col-span-2">
                <b>Adoption Fee:</b>{" "}
                <span className="text-green-600">${pet.adoptionFee}</span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-gray-600">{pet.description}</p>
            </div>

            <div className="flex gap-3">
              <Link href={`/pets/edit/${pet._id}`} className="flex-1">
                <Button className="w-full">Edit</Button>
              </Link>

              <Link href={`/pets/delete/${pet._id}`} className="flex-1">
                <Button color="danger" className="w-full">
                  <TrashBin /> Delete
                </Button>
              </Link>
            </div>

            <Button color="success" className="w-full">
              Adopt Now
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}