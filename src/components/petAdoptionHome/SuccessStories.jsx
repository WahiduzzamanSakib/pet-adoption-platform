import Image from "next/image";
import { FaPaw, FaArrowRight } from "react-icons/fa";

const successStories = [
  {
    id: 1,
    title: "Luna’s New Life",
    story:
      "Luna was rescued as a stray kitten and now enjoys a loving home full of comfort and playtime.",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500",
  },
  {
    id: 2,
    title: "Max’s Happy Ending",
    story:
      "Max spent months in a shelter before finding a family that takes him on daily adventures.",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500",
  },
];

export default function SuccessStories() {
  return (
    <section className="mb-24 px-4">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold flex items-center gap-3 text-slate-800">
          <span className="text-emerald-500">
            <FaPaw />
          </span>
          Success Stories
        </h2>
        <p className="text-slate-500 mt-2">
          Heartwarming journeys of rescued pets finding loving homes
        </p>
      </div>

     
      <div className="grid md:grid-cols-2 gap-10">
        {successStories.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
          >
            
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
              />

            
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <span className="text-emerald-500">
                  <FaArrowRight size={14} />
                </span>
                {item.title}
              </h3>

              <p className="text-slate-600 mt-3 leading-relaxed">
                {item.story}
              </p>

              
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}