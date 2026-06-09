import AdditionalSection from "@/components/additionalSection/AdditionalSection";
import Banner from "@/components/Banner";
import PetAdoptionHome from "@/components/petAdoptionHome/PetAdoptionHome";



export default function Home() {
  return (
    <div>
      <Banner/>
      <PetAdoptionHome/>
      <AdditionalSection/>
    </div>
  );
}
