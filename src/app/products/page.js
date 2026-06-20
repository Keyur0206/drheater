import BreadcrumbSection from "@/components/common/breadcrumb";
import CTASection from "@/components/common/cta-section";
import ProductShowcaseSection from "@/components/pages/products/ProductShowcaseSection";

const page = () => {
  return (
    <main className="w-full">
      <BreadcrumbSection
        title="Our Products"
        description="Explore our complete range of industrial heating elements, custom-engineered heaters and thermal solutions designed for diverse manufacturing applications."
      />
      <ProductShowcaseSection />
      <div className="container py-16 sm:py-20 lg:py-24">
        <CTASection
          title="Need Help Choosing The Right Heater?"
          description="Our team can help you select the ideal heating solution based on your application, operating conditions and performance requirements."
          primaryText="Request A Quote"
          primaryLink="/contact"
          secondaryText="Contact Experts"
          secondaryLink="/contact"
        />
      </div>
    </main>
  );
};

export default page;
