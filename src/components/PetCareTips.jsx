const careTips = [
  {
    id: 1,
    category: "Nutrition",
    tip: "Provide balanced food and fresh water daily."
  },
  {
    id: 2,
    category: "Exercise",
    tip: "Ensure daily physical activity for all pets."
  },
  {
    id: 3,
    category: "Health",
    tip: "Regular vet visits and vaccinations are essential."
  },
  {
    id: 4,
    category: "Environment",
    tip: "Create a safe and comfortable living space."
  }
];

export default function PetCareTips() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 border-b pb-3">
        Pet Care Tips
      </h2>

      <div className="space-y-4">
        {careTips.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 border-l-4 border-emerald-500 rounded-lg"
          >
            <span className="text-sm font-bold text-emerald-700 uppercase">
              {item.category}
            </span>
            <p className="text-slate-700 mt-1">{item.tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
}