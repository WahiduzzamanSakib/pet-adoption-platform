"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Chip } from "@heroui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { AdoptModalPage } from "@/components/AdoptModal";


export default function DetailsPage() {
  const { id } = useParams();



  const { data: session, isLoading: sessionLoading } =
    authClient.useSession();


  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`http://localhost:5000/pets/${id}`, );
        const data = await res.json();

        setPet(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadData();
  }, [id]);

  if (loading || sessionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <motion.div
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  const userId = session?.user?.id;

  const isOwner =
    userId &&
    pet?.userId &&
    String(userId) === String(pet.userId);


  if (!pet) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-950">
        <h1 className="text-red-500 text-xl">No Data Found</h1>
      </div>
    );
  }



  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      <motion.div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-800">
        <div className="grid md:grid-cols-2">


          <motion.div
            className="bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                width={500}
                height={500}
                unoptimized
                className="rounded-xl object-cover w-full h-100"
              />
            </motion.div>
          </motion.div>


          <div className="p-6 md:p-10 flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {pet.petName}
            </h1>

            <div className="flex gap-2 flex-wrap">
              <Chip color="primary">{pet.Species}</Chip>
              <Chip color="success">{pet.healthStatus}</Chip>
              <Chip color="warning">{pet.vaccinationStatus}</Chip>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-gray-800 dark:text-gray-200">
              <p><b>Breed:</b> {pet.breed}</p>
              <p><b>Age:</b> {pet.age}</p>
              <p><b>Gender:</b> {pet.gender}</p>
              <p><b>Location:</b> {pet.location}</p>
              <p className="col-span-2">
                <b>Adoption Fee:</b>{" "}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  ${pet.adoptionFee}
                </span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                About
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {pet.description}
              </p>
            </div>



            <AdoptModalPage isOwner={isOwner} pet={pet} />

          </div>
        </div>
      </motion.div>
    </div>
  );
}