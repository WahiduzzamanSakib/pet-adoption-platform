import Image from "next/image";


const successStories = [
  {
    id: 1,
    title: "Luna’s New Life",
    story:
      "Luna was rescued as a stray kitten and now enjoys a loving home full of comfort and playtime.",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500"
  },
  {
    id: 2,
    title: "Max’s Happy Ending",
    story:
      "Max spent months in a shelter before finding a family that takes him on daily adventures.",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500"
  }
];

export default function SuccessStories() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-6 border-b pb-3">
        Success Stories
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {successStories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md flex overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-48 h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-600">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-2 italic">{item.story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}