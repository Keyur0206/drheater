"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Custom Manufacturing",
    description:
      "Heating solutions tailored to machine specifications and industrial requirements.",
  },
  {
    title: "Premium Materials",
    description: "High-quality components selected for durability and long service life.",
  },
  {
    title: "Precision Engineering",
    description: "Designed to deliver stable thermal performance and efficient heat transfer.",
  },
  {
    title: "Strict Quality Control",
    description: "Every product is inspected and tested before delivery.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="section overflow-hidden bg-tertiary">
      <div className="container">
        <SectionHeader
          tag="Why Choose Us"
          title="Trusted By Industries That Demand Reliability"
          description="We combine engineering expertise, quality manufacturing and dependable support to deliver industrial heating solutions that perform."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Statement */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <span
              className="
          inline-flex
          rounded-full
          border
          border-primary/10
          bg-white
          px-4
          py-2
          text-xs
          font-bold
          uppercase
          tracking-[0.2em]
          text-orange-500
        "
            >
              DR Heater Advantage
            </span>

            <h3
              className="
          mt-6
          text-4xl
          font-black
          leading-[1.1]
          text-primary
          lg:text-6xl
        "
            >
              Built For Performance.
              <br />
              Trusted For Reliability.
            </h3>

            <p
              className="
          mt-6
          max-w-lg
          leading-8
          text-secondary
        "
            >
              Every industrial heater is manufactured with a focus on precision, durability and
              long-term operational efficiency, helping industries maintain consistent production
              performance.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-1 w-20 rounded-full bg-orange-500" />

              <span className="font-semibold text-primary">Industrial Heating Specialists</span>
            </div>
          </motion.div>

          {/* Right Feature Wall */}

          <div className="space-y-4">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  x: 8,
                }}
                className="
              group
              rounded-[2rem]
              border
              border-primary/10
              bg-white
              p-6
              lg:p-8
            "
              >
                <div className="flex items-start gap-5">
                  <span
                    className="
                text-3xl
                font-black
                text-orange-500/20
                transition-all
                duration-300
                group-hover:text-orange-500
              "
                  >
                    0{index + 1}
                  </span>

                  <div>
                    <h4
                      className="
                  text-xl
                  font-black
                  text-primary
                "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                  mt-3
                  leading-7
                  text-secondary
                "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Strip */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
        mt-16
        rounded-[2rem]
        border
        border-primary/10
        bg-white
        p-6
        lg:p-8
      "
        >
          <div
            className="
        flex
        flex-col
        items-center
        justify-between
        gap-6
        text-center
        lg:flex-row
        lg:text-left
      "
          >
            <h4
              className="
          max-w-xl
          text-xl
          font-black
          text-primary
          lg:text-3xl
        "
            >
              Delivering dependable heating solutions for modern industrial applications.
            </h4>

            <div
              className="
          flex
          flex-wrap
          justify-center
          gap-3
        "
            >
              {["Custom Fit", "Industrial Grade", "Quality Tested", "Reliable Performance"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="
                rounded-full
                border
                border-primary/10
                px-4
                py-2
                text-sm
                font-semibold
                text-primary
              "
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
