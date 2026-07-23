import Breadcrumb from "@/components/common/breadcrumb";
import CTASection from "@/components/common/cta-section";
import AboutSection from "@/components/pages/about/aboutSection";
import EngineeringExcellenceSection from "@/components/pages/about/EngineeringExcellenceSection";
import IndustriesSection from "@/components/pages/about/IndustriesSection";
import ManufacturingProcessSection from "@/components/pages/about/ManufacturingProcessSection";
import WhyChooseSection from "@/components/pages/about/WhyChooseSection";

export const metadata = {
  title: "About",
  description: "Learn about DR Heater.",
};

export default function AboutPage() {
  const customLabels = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <main className="w-full">
      <Breadcrumb
        pageTitle="About Us"
        customLabels={customLabels}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop"
        showBackground={true}
      />
      <AboutSection />
      <IndustriesSection />
      <EngineeringExcellenceSection />
      <ManufacturingProcessSection />
      <WhyChooseSection />
      <div className="container py-12 sm:py-14 lg:py-16">
        <CTASection
          title="Partner With A Team Focused On Quality & Reliability"
          description="At DR Heater, we combine engineering expertise, precision manufacturing and dependable support to deliver industrial heating solutions you can trust."
          primaryText="Contact Us"
          primaryLink="/contact"
          secondaryText="Explore Products"
          secondaryLink="/products"
        />
      </div>
    </main>
  );
}
