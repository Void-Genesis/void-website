import HeroSection from "@/components/homepage/HeroSection";
import MissionSection from "@/components/homepage/MissionSection";
import SolutionsSection from "@/components/homepage/SolutionsSection";
import CaseStudySection from "@/components/homepage/CaseStudySection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import TeamSection from "@/components/homepage/TeamSection";
import CallToActionSection from "@/components/homepage/CallToActionSection";
import FirstSection from "@/components/homepage/FirstSection";

export default function Home() {
  return (
    <>
      <FirstSection />
      <HeroSection />
      <MissionSection />
      <SolutionsSection />
      <CaseStudySection />
      <TestimonialSection />
      <TeamSection />
      <CallToActionSection />
    </>
  );
}
