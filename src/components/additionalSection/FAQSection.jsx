'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQSection({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 px-3 py-1.5 rounded-full">
          Support Center
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id;

          return (
            <div
              key={faq.id}
              className={`bg-white border rounded-xl overflow-hidden transition-all
              ${isOpen
                ? "border-orange-400 shadow-md"
                : "border-slate-200 hover:border-orange-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className={`font-semibold ${isOpen ? "text-orange-600" : "text-slate-900"}`}>
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-orange-500" : "text-slate-400"
                  }`}
                />
              </button>

              <div
                className={`px-6 pb-6 text-sm text-slate-600 transition-all duration-300
                ${isOpen ? "block" : "hidden"}`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}