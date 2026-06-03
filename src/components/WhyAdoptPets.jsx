const adoptionReasons = [
  {
    id: 1,
    title: "Save a Life",
    description:
      "Millions of pets are abandoned or in shelters. Adoption gives them a second chance."
  },
  {
    id: 2,
    title: "Support Ethical Care",
    description:
      "Adoption reduces demand for unethical breeding and supports shelters."
  },
  {
    id: 3,
    title: "Ready for Home",
    description:
      "Most pets are vaccinated, health-checked, and ready for adoption."
  }
];

export default function WhyAdoptPets() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-6 border-b pb-3">
        Why Adopt a Pet?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {adoptionReasons.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}