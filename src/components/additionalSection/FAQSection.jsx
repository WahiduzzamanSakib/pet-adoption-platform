"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-full">
          Support Center
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
          Frequently Asked Questions
        </h2>
      </motion.div>

      {/* FAQ List */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="space-y-4"
      >
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id;

          return (
            <motion.div
              key={faq.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.01 }}
              className={`border rounded-xl overflow-hidden transition-all
                ${
                  isOpen
                    ? "border-orange-400 shadow-md dark:border-orange-500"
                    : "border-slate-200 hover:border-orange-300 dark:border-gray-700 dark:hover:border-orange-500"
                }
                bg-white dark:bg-gray-900`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span
                  className={`font-semibold transition-colors ${
                    isOpen
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown
                    className={
                      isOpen
                        ? "text-orange-500"
                        : "text-slate-400 dark:text-gray-400"
                    }
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}