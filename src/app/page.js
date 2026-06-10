import AdditionalSection from "@/components/additionalSection/AdditionalSection";
import Banner from "@/components/Banner";
import HomeCardComponents from "@/components/HomeCardComponents";
import PetAdoptionHome from "@/components/petAdoptionHome/PetAdoptionHome";



export default function Home() {
  return (
    <div>
      <Banner/>
      <HomeCardComponents/>
      <PetAdoptionHome/>
      <AdditionalSection/>
    </div>
  );
}
