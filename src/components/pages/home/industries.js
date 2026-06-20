"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    id: "01",
    name: "Plastic Industry",
    description:
      "Precision heating solutions for plastic processing, extrusion and molding operations requiring stable temperature control and reliable performance.",
    image: "/industrial-heaters-hero.png",
  },
  {
    id: "02",
    name: "Packaging Industry",
    description:
      "Industrial heaters designed for heat sealing, shrink wrapping, lamination and high-speed packaging applications.",
    image: "/industrial-heaters-hero.png",
  },
  {
    id: "03",
    name: "Injection Moulding",
    description:
      "Advanced heating elements for nozzle heating, hot runner systems and precision injection moulding processes.",
    image: "/industrial-heaters-hero.png",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-tertiary py-16 lg:py-24">
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(to_right,var(--primary)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent/5
          blur-[140px]
        "
      />

      <div className="container relative">
        <SectionHeader
          tag="Industries We Serve"
          title="Industrial Heating Solutions For Every Application"
          description="Reliable thermal solutions engineered for diverse manufacturing sectors across modern industries."
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {industries.map((industry, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`
                  grid
                  items-center
                  gap-8
                  lg:grid-cols-2
                  lg:gap-14
                  ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >
                {/* Image */}

                <div className="relative">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-primary/10
                      bg-white
                      p-3
                      shadow-xl
                    "
                  >
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      width={900}
                      height={700}
                      className="
                        h-[280px]
                        w-full
                        rounded-[1.5rem]
                        object-cover
                        sm:h-[380px]
                        lg:h-[500px]
                      "
                    />
                  </motion.div>

                  {/* Premium Floating Number */}

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
    absolute
    top-4
    left-4
    z-20
    lg:-top-10
    lg:-left-10
  "
                  >
                    {/* Border Layer */}

                    <div
                      className="
      relative
      flex
      h-16
      w-16
      items-center
      justify-center

      sm:h-20
      sm:w-20

      lg:h-32
      lg:w-32
    "
                    >
                      <div
                        className="
        absolute
        inset-0
        bg-accent
        [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]
      "
                      />

                      {/* Inner Hexagon */}

                      <div
                        className="
        absolute
        inset-[2px]
        flex
        items-center
        justify-center
        bg-white
        shadow-xl
        [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]

        lg:inset-[3px]
      "
                      >
                        <div className="text-center">
                          <div
                            className="
            text-xl
            font-black
            leading-none
            text-accent

            sm:text-2xl
            lg:text-5xl
          "
                          >
                            {industry.id}
                          </div>

                          <div
                            className="
            mt-1
            hidden
            text-[9px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-primary
            lg:block
          "
                          >
                            Industry
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}

                <div className="relative">
                  <div
                    className="
                      rounded-[2rem]
                      border
                      border-primary/10
                      bg-white
                      p-8
                      shadow-lg
                      lg:p-10
                    "
                  >
                    <span
                      className="
                        inline-flex
                        rounded-full
                        bg-accent/10
                        px-4
                        py-2
                        text-xs
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-accent
                      "
                    >
                      Industry Sector
                    </span>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-black
                        text-primary
                        lg:text-5xl
                      "
                    >
                      {industry.name}
                    </h3>

                    <p
                      className="
                        mt-5
                        leading-8
                        text-secondary
                      "
                    >
                      {industry.description}
                    </p>

                    {/* Features */}

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl bg-accent/5 p-4">
                        <h4 className="font-bold text-primary">Precision Control</h4>
                      </div>

                      <div className="rounded-xl bg-accent/5 p-4">
                        <h4 className="font-bold text-primary">Industrial Grade</h4>
                      </div>

                      <div className="rounded-xl bg-accent/5 p-4">
                        <h4 className="font-bold text-primary">Custom Design</h4>
                      </div>

                      <div className="rounded-xl bg-accent/5 p-4">
                        <h4 className="font-bold text-primary">Long Service Life</h4>
                      </div>
                    </div>

                    {/* CTA */}

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href="/products"
                        className="
                        btn-primary
                          rounded-full
                          bg-primary
                          px-6
                          py-3
                          font-semibold
                          text-white
                          transition-all
                          hover:bg-accent
                        "
                      >
                        View Products
                      </Link>

                      <Link
                        href="/contact"
                        className="
                        btn-secondary
                          rounded-full
                          border
                          
                          px-6
                          py-3
                          font-semibold
                          
                          transition-all
                          
                          
                        "
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
