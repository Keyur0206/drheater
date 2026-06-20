"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understanding machine specifications, operating temperatures and application requirements.",
  },
  {
    number: "02",
    title: "Engineering Design",
    description: "Developing the optimal heating solution based on industrial requirements.",
  },
  {
    number: "03",
    title: "Precision Manufacturing",
    description: "Production using premium raw materials and controlled manufacturing processes.",
  },
  {
    number: "04",
    title: "Quality Testing",
    description: "Inspection and validation to ensure reliability, efficiency and safety.",
  },
  {
    number: "05",
    title: "Dispatch & Support",
    description: "Timely delivery backed by technical guidance and customer support.",
  },
];

export default function ManufacturingProcessSection() {
  return (
    <section className=" overflow-hidden bg-white">
      <div className="container">
        <SectionHeader
          tag="Manufacturing Process"
          title="From Concept To Industrial Performance"
          description="Every product follows a carefully controlled process focused on quality, consistency and reliability."
        />

        {/* Desktop */}

        <div className="relative mt-10 hidden xl:block">
          {/* Center Line */}

          <div className="absolute left-0 right-0 top-[90px] h-[2px] bg-primary/10" />

          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="relative"
              >
                {/* Step Number */}

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                relative
                z-10
                mx-auto
                flex
                h-[90px]
                w-[90px]
                items-center
                justify-center
                rounded-full
                border-4
                border-white
                bg-primary
                text-white
                shadow-xl
              "
                >
                  <span className="text-xl font-black">{step.number}</span>
                </motion.div>

                {/* Card */}

                <div
                  className="
                mt-8
                rounded-[2rem]
                border
                border-primary/10
                bg-tertiary
                p-6
                text-center
              "
                >
                  <h3 className="text-lg font-black text-primary">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-secondary">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet + Mobile */}

        <div className="mt-14 xl:hidden">
          <div className="relative">
            {/* Vertical Line */}

            <div className="absolute left-[24px] top-0 h-full w-[2px] bg-primary/10" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative flex gap-6"
                >
                  {/* Number Circle */}

                  <div
                    className="
                  relative
                  z-10
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  text-sm
                  font-black
                  text-white
                "
                  >
                    {step.number}
                  </div>

                  {/* Content */}

                  <div
                    className="
                  flex-1
                  rounded-[1.5rem]
                  border
                  border-primary/10
                  bg-tertiary
                  p-5
                "
                  >
                    <h3 className="font-black text-primary">{step.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-secondary">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
        bg-tertiary
        p-8
        text-center
      "
        >
          <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            Precision At Every Stage
          </span>

          <h3 className="mt-4 text-2xl font-black text-primary lg:text-4xl">
            Built For Reliability. Tested For Performance.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
