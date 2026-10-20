import AdditionalSection from "@/components/additionalSection/AdditionalSection";
import Banner from "@/components/Banner";
import CtaPage from "@/components/CtaPage";
import HomeCard from "@/components/homeCard/HomeCard";
import HowItWorks from "@/components/HowItWorks";
import PetAdoptionHome from "@/components/petAdoptionHome/PetAdoptionHome";


export default function Home() {
  return (
    <div>
      <Banner/>
      <HomeCard />
      <HowItWorks />
      <PetAdoptionHome/>
      <AdditionalSection />
      <CtaPage />
    </div>
  );
}
