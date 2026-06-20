"use client";

import SectionHeader from "@/components/common/section-header";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Custom Engineering",
    description:
      "Heating solutions tailored around machine specifications and industrial requirements.",
  },
  {
    number: "02",
    title: "Industrial Grade Manufacturing",
    description:
      "Premium materials and precision production standards ensure long-term reliability.",
  },
  {
    number: "03",
    title: "High Temperature Performance",
    description: "Designed to perform consistently in demanding industrial environments.",
  },
  {
    number: "04",
    title: "Quality Tested Products",
    description: "Each product undergoes rigorous inspection before delivery.",
  },
];

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0);

  const toggleItem = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          tag="Capabilities"
          title="What Makes DR Heater Different"
          description="Engineered for performance, reliability and long-term industrial use."
        />

        <div className="mt-10 lg:mt-16 overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] border border-primary/10 bg-white">
          {capabilities.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={item.number}
                onClick={() => toggleItem(index)}
                className={`
                  cursor-pointer
                  transition-all
                  duration-300
                  ${index !== capabilities.length - 1 ? "border-b border-primary/10" : ""}
                `}
              >
                <div
                  className={`
                    p-5 sm:p-6 lg:p-8
                    transition-all
                    duration-300
                    ${isActive ? "bg-orange-50/50" : "bg-white"}
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <span
                        className={`
                          text-2xl
                          sm:text-3xl
                          lg:text-5xl
                          font-black
                          transition-all
                          duration-300
                          ${isActive ? "text-orange-500" : "text-primary/20"}
                        `}
                      >
                        {item.number}
                      </span>

                      <div>
                        <h3
                          className={`
                            font-black
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "text-primary text-xl sm:text-2xl lg:text-3xl"
                                : "text-primary/80 text-lg sm:text-xl lg:text-2xl"
                            }
                          `}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isActive ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-primary/10
                      "
                    >
                      <Plus size={18} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 pl-0 sm:pl-14 lg:pl-20">
                          <p className="max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-secondary">
                            {item.description}
                          </p>

                          <div className="mt-6 flex items-center gap-3">
                            <div className="h-[3px] w-24 sm:w-32 rounded-full bg-orange-500" />

                            <ArrowUpRight size={18} className="text-orange-500" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
