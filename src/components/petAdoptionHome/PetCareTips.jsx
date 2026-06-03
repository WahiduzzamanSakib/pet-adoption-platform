const careTips = [
  {
    id: 1,
    category: "Nutrition",
    tip: "Provide balanced food and fresh water daily.",
    icon: "🍗"
  },
  {
    id: 2,
    category: "Exercise",
    tip: "Ensure daily physical activity for all pets.",
    icon: "🏃‍♂️"
  },
  {
    id: 3,
    category: "Health",
    tip: "Regular vet visits and vaccinations are essential.",
    icon: "🩺"
  },
  {
    id: 4,
    category: "Environment",
    tip: "Create a safe and comfortable living space.",
    icon: "🏡"
  }
];

export default function PetCareTips() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 border-b pb-3 text-slate-800">
        Pet Care Tips
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {careTips.map((item) => (
          <div
            key={item.id}
            className="
              group relative overflow-hidden
              bg-white border border-slate-200
              rounded-xl p-5
              shadow-sm
              transition-all duration-300 ease-out
              hover:shadow-md hover:-translate-y-1
            "
          >
            {/* subtle hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-emerald-50 to-transparent" />

            <div className="relative flex items-start gap-3">
              <div className="text-2xl">{item.icon}</div>

              <div>
                <span className="text-xs font-semibold tracking-wide text-emerald-600 uppercase">
                  {item.category}
                </span>

                <p className="text-slate-700 mt-1 leading-relaxed">
                  {item.tip}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}