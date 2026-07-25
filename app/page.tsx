import HeroSection from "@/components/sections/HeroSection";
import CoursesSection from "@/components/sections/CoursesSection";
import LibrarySection from "@/components/sections/LibrarySection";
import StatsSection from "@/components/sections/StatsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AdmissionBannerSection from "@/components/sections/AdmissionBannerSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <LibrarySection />
      <StatsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <AdmissionBannerSection />
      <FAQSection />
    </>
  );
}
