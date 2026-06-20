"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Understanding Requirements",
    description:
      "Every project starts with understanding machine specifications, operating conditions and customer expectations.",
  },
  {
    number: "02",
    title: "Engineering The Solution",
    description:
      "Our team designs heating solutions optimized for efficiency, durability and thermal performance.",
  },
  {
    number: "03",
    title: "Precision Manufacturing",
    description:
      "Using premium materials and controlled production processes to ensure consistent quality.",
  },
  {
    number: "04",
    title: "Quality Validation",
    description: "Each product undergoes rigorous testing before reaching the customer.",
  },
  {
    number: "05",
    title: "Long-Term Reliability",
    description:
      "Built for demanding industrial environments where performance and reliability matter every day.",
  },
];

export default function PhilosophySection() {
  return (
    <section className=" container relative  bg-tertiary">
      {/* Background Text */}

      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2
          className="
        select-none
        text-[120px]
        font-black
        uppercase
        tracking-wider
        text-primary/[0.03]
        sm:text-[180px]
        lg:text-[280px]
      "
        >
          DR
        </h2>
      </div> */}

      <div className="  relative">
        <SectionHeader
          tag="Our Philosophy"
          title="Engineering Beyond Manufacturing"
          description="We don't just manufacture industrial heaters. We create dependable thermal solutions designed for long-term industrial performance."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <div className="max-w-lg">
              <span className="inline-flex rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Our Approach
              </span>

              <h3
                className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-primary
              lg:text-6xl
            "
              >
                We Engineer Reliability.
              </h3>

              <p
                className="
              mt-6
              text-base
              leading-8
              text-secondary
            "
              >
                Every heater we manufacture follows a carefully planned process focused on quality,
                precision and long-term industrial performance.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Customer-Focused Design",
                  "Premium Raw Materials",
                  "Precision Manufacturing",
                  "Strict Quality Testing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />

                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <div className="space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
              group
              relative
              overflow-hidden
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
                absolute
                right-4
                top-4
                text-5xl
                font-black
                text-orange-500/10
                transition-all
                duration-300
                group-hover:text-orange-500/20
              "
                >
                  {item.number}
                </div>

                <div className="relative">
                  <div
                    className="
                  mb-5
                  h-1
                  w-14
                  rounded-full
                  bg-orange-500
                  transition-all
                  duration-300
                  group-hover:w-24
                "
                  />

                  <h4
                    className="
                  text-xl
                  font-black
                  text-primary
                  lg:text-2xl
                "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                  mt-4
                  leading-7
                  text-secondary
                "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
