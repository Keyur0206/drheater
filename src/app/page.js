import CTASection from "@/components/common/cta-section";
import Hero from "@/components/pages/home/hero";
import Industries from "@/components/pages/home/industries";
import ProductCategories from "@/components/pages/home/product-categories";
import FeaturesTimeline from "@/components/pages/home/features-timeline";

const page = () => {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <Industries />
      <FeaturesTimeline />
      <div className="container py-16 sm:py-20 lg:py-24">
        <CTASection
          title="Ready to optimize your heating solutions?"
          description="Let our experts help you find the perfect industrial heating solution for your specific application and production needs."
          primaryText="Contact Our Team"
          primaryLink="/contact"
          secondaryText="View Products"
          secondaryLink="/products"
        />
      </div>
    </div>
  );
};

export default page;
