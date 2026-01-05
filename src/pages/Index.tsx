import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import InclusionsSection from "@/components/InclusionsSection";
import FAQSection from "@/components/FAQSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <InclusionsSection />
      <FAQSection />
      <RegisterSection />
      <Footer />
    </main>
  );
};

export default Index;
