"use client";

import SectionHeader from "@/components/common/section-header";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you manufacture custom heaters?",
    answer:
      "Yes. We specialize in custom-built industrial heating solutions designed according to machine specifications and application requirements.",
  },
  {
    question: "What sheath materials are available?",
    answer:
      "We offer multiple sheath material options depending on operating conditions, temperature requirements and industrial applications.",
  },
  {
    question: "What is the maximum operating temperature?",
    answer:
      "Operating temperatures vary by heater type and application. Our engineering team recommends the optimal solution based on your requirements.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve plastic processing, packaging, extrusion, injection moulding, thermoforming, chemical and various manufacturing industries.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order quantities depend on the product type and customization requirements. Please contact our team for details.",
  },
  {
    question: "How quickly can orders be delivered?",
    answer:
      "Lead times vary depending on product specifications and order quantity. We focus on timely manufacturing and delivery schedules.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section relative overflow-hidden bg-white">
      {/* Background Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(to_right,var(--primary)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="container relative">
        <SectionHeader
          tag="Frequently Asked Questions"
          title="Everything You Need To Know"
          description="Find answers to common questions about our industrial heating solutions, manufacturing capabilities and delivery process."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                  group
                  border-b
                  border-primary/10
                "
              >
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    py-6
                    text-left
                  "
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="
                        text-lg
                        font-black
                        text-accent
                        sm:text-xl
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="
                        text-base
                        font-black
                        text-primary
                        sm:text-lg
                        lg:text-xl
                      "
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                  >
                    <ChevronDown className="text-accent" size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
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
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-[52px]">
                        <p
                          className="
                            max-w-3xl
                            leading-8
                            text-secondary
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-12
            max-w-3xl
            rounded-[1.5rem]
            border
            border-primary/10
            bg-tertiary
            p-6
            text-center
          "
        >
          <h3 className="font-black text-primary">Need More Information?</h3>

          <p className="mt-2 text-secondary">
            Our engineering team is available to discuss your application, specifications and custom
            heating requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
