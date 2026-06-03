'use client';
import React from 'react';
import { FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

export default function PartnerShelters({ partnerShelters }) {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 px-3 py-1.5 rounded-full">
          Our Network
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
          Trusted Partner Shelters
        </h2>
        <p className="text-base text-slate-500 mt-3">
          Verified animal rescue organizations working with us nationwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partnerShelters.map((shelter) => (
          <div
            key={shelter.id}
            className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-400"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-3xl bg-slate-50 p-4 rounded-2xl 
              group-hover:scale-110 transition-transform">
                {shelter.logo}
              </div>

              <span
                className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md transition-all
                ${shelter.tier === "Premium Partner"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-blue-50 text-blue-700"
                } group-hover:bg-orange-500 group-hover:text-white`}
              >
                {shelter.tier}
              </span>
            </div>

            <h3 className="text-xl font-bold group-hover:text-orange-600 transition">
              {shelter.name}
            </h3>

            <p className="text-sm text-slate-400 flex items-center mt-1">
              <FaMapMarkerAlt className="mr-2 text-orange-400" />
              {shelter.location}
            </p>

            <div className="mt-6 pt-6 border-t flex items-center justify-between">
              <span className="text-xs text-slate-400 uppercase">Impact</span>
              <span className="text-sm font-semibold flex items-center">
                <FaHeart className="text-emerald-500 mr-2 animate-pulse" />
                {shelter.totalAdopted}+ Adoptions
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}