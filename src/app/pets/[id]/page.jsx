"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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

  // No Data Found
  if (!pet) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xl text-red-500"
        >
          No Data Found
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
         
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 flex items-center justify-center p-6"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full"
            >
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                width={500}
                height={500}
                unoptimized
                className="rounded-xl object-cover w-full h-[400px]"
              />
            </motion.div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 md:p-10 flex flex-col gap-6"
          >
           
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold"
            >
              {pet.petName}
            </motion.h1>

          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              <Chip color="primary">{pet.Species}</Chip>
              <Chip color="success">{pet.healthStatus}</Chip>
              <Chip color="warning">{pet.vaccinationStatus}</Chip>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-xl"
            >
              <p>
                <b>Breed:</b> {pet.breed}
              </p>
              <p>
                <b>Age:</b> {pet.age}
              </p>
              <p>
                <b>Gender:</b> {pet.gender}
              </p>
              <p>
                <b>Location:</b> {pet.location}
              </p>
              <p className="col-span-2">
                <b>Adoption Fee:</b>{" "}
                <span className="text-green-600 font-semibold">
                  ${pet.adoptionFee}
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="font-semibold mb-2 text-lg">About</h3>
              <p className="text-gray-600 leading-relaxed">
                {pet.description}
              </p>
            </motion.div>

            {/* Adopt Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                color="secondary"
                className="w-full font-semibold text-white"
                size="lg"
              >
                Adopt Now 🐾
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}