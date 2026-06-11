"use client";

import { motion } from "framer-motion";

const careTips = [
  {
    id: 1,
    category: "Nutrition",
    tip: "Provide balanced food and fresh water daily.",
    icon: "🍗",
  },
  {
    id: 2,
    category: "Exercise",
    tip: "Ensure daily physical activity for all pets.",
    icon: "🏃‍♂️",
  },
  {
    id: 3,
    category: "Health",
    tip: "Regular vet visits and vaccinations are essential.",
    icon: "🩺",
  },
  {
    id: 4,
    category: "Environment",
    tip: "Create a safe and comfortable living space.",
    icon: "🏡",
  },
];

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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PetCareTips() {
  return (
    <section className="mb-12">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 border-b pb-3 text-slate-800">
          Pet Care Tips
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-5"
      >
        {careTips.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="
              group relative overflow-hidden
              bg-white border border-slate-200
              rounded-xl p-5
              shadow-sm hover:shadow-lg
            "
          >
            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative flex items-start gap-3">
              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                }}
                className="text-3xl"
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <div>
                <span className="text-xs font-semibold tracking-wide text-emerald-600 uppercase">
                  {item.category}
                </span>

                <p className="text-slate-700 mt-1 leading-relaxed">
                  {item.tip}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}