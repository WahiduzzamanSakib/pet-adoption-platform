"use client";

import { motion } from "framer-motion";

const adoptionReasons = [
  {
    id: 1,
    title: "Save a Life",
    description:
      "Millions of pets are abandoned or in shelters. Adoption gives them a second chance.",
  },
  {
    id: 2,
    title: "Support Ethical Care",
    description:
      "Adoption reduces demand for unethical breeding and supports shelters.",
  },
  {
    id: 3,
    title: "Ready for Home",
    description:
      "Most pets are vaccinated, health-checked, and ready for adoption.",
  },
];

const icons = ["🐶", "❤️", "🏡"];

// Container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function WhyAdoptPets() {
  return (
    <section className="mb-24 px-4 md:px-0">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-extrabold text-slate-800"
        >
          Why Adopt a Pet?
        </motion.h2>

        <p className="text-slate-500 mt-3">
          Give love, care, and a forever home to a pet in need
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {adoptionReasons.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              group relative overflow-hidden
              bg-white
              border border-slate-100
              rounded-2xl
              p-7
              shadow-sm
              hover:shadow-2xl
            "
          >
            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative">
              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                }}
                className="
                  w-14 h-14 mb-5
                  flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-emerald-500
                  text-2xl
                  text-white
                  shadow-md
                "
              >
                {icons[index]}
              </motion.div>

              {/* Title */}
              <motion.h3
                whileHover={{ x: 5 }}
                className="
                  text-xl
                  font-bold
                  mb-2
                  text-slate-900
                  group-hover:text-blue-600
                  transition-colors
                "
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}