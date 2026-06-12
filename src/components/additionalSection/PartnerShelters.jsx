"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function PartnerShelters({ partnerShelters }) {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

     
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-full">
          Our Network
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
          Trusted Partner Shelters
        </h2>

        <p className="text-base text-slate-500 dark:text-gray-300 mt-3">
          Verified animal rescue organizations working with us nationwide.
        </p>
      </motion.div>

     
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {partnerShelters.map((shelter) => (
          <motion.div
            key={shelter.id}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="
              group p-8 rounded-2xl
              bg-white dark:bg-gray-900
              border border-slate-100 dark:border-gray-800
              shadow-sm hover:shadow-xl
              hover:border-orange-400 dark:hover:border-orange-500
            "
          >
          
            <div className="flex items-center justify-between mb-6">

             
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                }}
                className="
                  text-3xl p-4 rounded-2xl
                  bg-slate-50 dark:bg-gray-800
                "
              >
                {shelter.logo}
              </motion.div>

             
              <motion.span
                whileHover={{ scale: 1.08 }}
                className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md
                ${
                  shelter.tier === "Premium Partner"
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                    : "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                }`}
              >
                {shelter.tier}
              </motion.span>
            </div>

           
            <motion.h3
              whileHover={{ x: 5 }}
              className="text-xl font-bold transition-colors group-hover:text-orange-600 dark:text-white"
            >
              {shelter.name}
            </motion.h3>

           
            <p className="text-sm text-slate-400 dark:text-gray-400 flex items-center mt-2">
              <FaMapMarkerAlt className="mr-2 text-orange-400" />
              {shelter.location}
            </p>

            
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-gray-800 flex items-center justify-between">

              <span className="text-xs text-gray-500 dark:text-gray-500 uppercase">
                Impact
              </span>

              <span className="text-sm font-semibold flex items-center text-blue-400 dark:text-gray-300">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <FaHeart className="text-emerald-500 mr-2" />
                </motion.div>

                {shelter.totalAdopted}+ Adoptions
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}