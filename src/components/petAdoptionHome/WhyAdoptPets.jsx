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

const icons = ["🐶", "❤️", "🏡"];

export default function WhyAdoptPets() {
  return (
    <section className="mb-24 px-4 md:px-0">
     
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800">
          Why Adopt a Pet?
        </h2>
        <p className="text-slate-500 mt-3">
          Give love, care, and a forever home to a pet in need
        </p>
      </div>

      
      <div className="grid md:grid-cols-3 gap-8">
        {adoptionReasons.map((item, index) => (
          <div
            key={item.id}
            className="
              group relative overflow-hidden
              bg-white
              border border-slate-100
              rounded-2xl
              p-7
              shadow-sm
              transition-all duration-300
              hover:-translate-y-3 hover:shadow-2xl
            "
          >
           
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>

            <div className="relative">
            
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 text-2xl text-white shadow-md group-hover:scale-110 transition">
                {icons[index]}
              </div>

             
              <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}