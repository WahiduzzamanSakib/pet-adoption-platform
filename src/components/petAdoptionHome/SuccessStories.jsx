"use client";

import Image from "next/image";
import {
  FaStar,
  FaQuoteLeft,
  FaPaw,
  FaHeart,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    pet: "Luna",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
    review:
      "Adopting Luna changed our lives. She is playful, loving and brings happiness every day.",
  },
  {
    id: 2,
    name: "Michael Brown",
    pet: "Max",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800",
    review:
      "Max became part of our family immediately. We couldn't imagine life without him.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    pet: "Bella",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800",
    review:
      "Bella is the sweetest companion. The adoption experience was smooth and wonderful.",
  },
  {
    id: 4,
    name: "David Lee",
    pet: "Charlie",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800",
    review:
      "Charlie finally found his forever home and enjoys daily walks and endless love.",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-emerald-50" />

      {/* Header */}
      <div className="mb-14 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <FaPaw className="text-3xl text-emerald-500" />
          <h2 className="text-4xl font-bold text-slate-800 md:text-5xl">
            Happy Pet Parents
          </h2>
        </div>

        <p className="mx-auto max-w-2xl text-slate-500">
          Real stories from families who found their perfect companion
          through adoption.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          <FaHeart />
          4.9 / 5 Average Adoption Experience
        </div>
      </div>

      {/* Slider */}
      <div className="group overflow-hidden">
        <div className="flex w-max gap-8 animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[320px] flex-shrink-0 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* User */}
              <div className="mb-5 flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={review.image}
                    alt={review.pet}
                    width={70}
                    height={70}
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-emerald-100"
                  />

                  <span className="absolute -bottom-1 -right-1 rounded-full bg-emerald-500 p-1.5 text-white">
                    <FaPaw size={10} />
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    {review.name}
                  </h3>

                  <p className="text-sm text-emerald-600">
                    Adopted {review.pet}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <FaQuoteLeft className="mb-3 text-3xl text-emerald-200" />

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                {review.review}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400"
                      size={14}
                    />
                  ))}
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Verified Adoption
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}