import BreadcrumbSection from "@/components/common/breadcrumb";
import CTASection from "@/components/common/cta-section";
import ContactHeroSection from "@/components/pages/contact/ContactHeroSection";
import ContactProcessSection from "@/components/pages/contact/ContactProcessSection";
import FAQSection from "@/components/pages/contact/FAQSection";
import ManufacturingPresenceSection from "@/components/pages/contact/ManufacturingPresenceSection";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with DR Heater.",
};

const page = () => {
  return (
    <main className="w-full">
      <BreadcrumbSection
        title="Contact Us"
        description="Get in touch with our team for product inquiries, technical assistance and customized industrial heating solutions."
      />
      <ContactHeroSection />
      <ManufacturingPresenceSection />
      <ContactProcessSection />
      <FAQSection />
      <div className="container py-12 sm:py-14 lg:py-16">
        <CTASection
          title="Ready To Discuss Your Heating Requirements?"
          description="Whether you need a custom industrial heater, technical guidance or a manufacturing partner, our team is ready to help you find the right solution."
          primaryText="Get In Touch"
          primaryLink="/contact"
          secondaryText="View Product Range"
          secondaryLink="/products"
        />
      </div>
    </main>
  );
};

export default page;
