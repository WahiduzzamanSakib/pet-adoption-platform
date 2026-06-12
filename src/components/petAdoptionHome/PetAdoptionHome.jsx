import PetCareTips from "./PetCareTips";
import SuccessStories from "./SuccessStories";
import WhyAdoptPets from "./WhyAdoptPets";

export default function PetAdoptionHome() {
    return (
        <div className=" mx-auto px-4 py-12 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-4">
                        Pet Adoption Platform
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        Adopt pets and give them a better life — dogs, cats, birds & more.
                    </p>
                </header>

                <WhyAdoptPets />
                <SuccessStories />
                <PetCareTips />
            </div>
        </div>
    );
}