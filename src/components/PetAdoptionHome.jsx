import SuccessStories from "./SuccessStories";
import WhyAdoptPets from "./WhyAdoptPets";


export default function PetAdoptionHome() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-slate-50 min-h-screen">

      
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-4">
          Pet Adoption Platform
        </h1>
        <p className="text-xl text-slate-600">
          Adopt pets and give them a better life — dogs, cats, birds & more.
        </p>
      </header>

      
      <WhyAdoptPets />
      {/* <SuccessStories/> */}

    </div>
  );
}