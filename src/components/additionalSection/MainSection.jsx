'use client';
import React from 'react';
import PartnerShelters from './PartnerShelters';
import FAQSection from './FAQSection';

const partnerShelters = [
  { id: 1, name: "PAW Foundation", location: "Dhaka, Bangladesh", logo: "🐾", totalAdopted: 120, tier: "Premium Partner" },
  { id: 2, name: "Save Our Paws", location: "Chittagong, Bangladesh", logo: "❤️", totalAdopted: 85, tier: "Verified Shelter" },
  { id: 3, name: "Obhoyaronno", location: "Sylhet, Bangladesh", logo: "🏡", totalAdopted: 210, tier: "Premium Partner" }
];

const faqs = [
  {
    id: 1,
    question: "How does the adoption process work?",
    answer: "Browse pets, submit request, and wait for approval."
  },
  {
    id: 2,
    question: "Is there any adoption fee involved?",
    answer: "Depends on shelter; some are free, some charge small fees."
  },
  {
    id: 3,
    question: "Can I list a pet for adoption?",
    answer: "Yes, verified users and shelters can list pets."
  }
];

export default function MainSection () {
  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-800">

      <PartnerShelters partnerShelters={partnerShelters} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-slate-200" />
      </div>

      <FAQSection faqs={faqs} />

    </div>
  );
}