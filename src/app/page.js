import AdditionalSection from "@/components/additionalSection/AdditionalSection";
import Banner from "@/components/Banner";
import HomeCard from "@/components/homeCard/HomeCard";
import PetAdoptionHome from "@/components/petAdoptionHome/PetAdoptionHome";


export default function Home() {
  return (
    <div>
      <Banner/>
      <HomeCard/>
      <PetAdoptionHome/>
      <AdditionalSection/>
    </div>
  );
}
