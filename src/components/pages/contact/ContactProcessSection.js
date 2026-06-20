"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import { ClipboardCheck, Cog, Headset, PencilRuler, Truck } from "lucide-react";

const process = [
  {
    number: "01",
    title: "Requirement",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Consultation",
    icon: Headset,
  },
  {
    number: "03",
    title: "Custom Design",
    icon: PencilRuler,
  },
  {
    number: "04",
    title: "Manufacturing",
    icon: Cog,
  },
  {
    number: "05",
    title: "Delivery",
    icon: Truck,
  },
];

export default function ContactProcessSection() {
  return (
    <section className="section relative overflow-hidden bg-tertiary">
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(to_right,var(--primary)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <div className="container relative">
        <SectionHeader
          tag="Why Contact DR Heater"
          title="Simple Process. Reliable Results."
          description="A streamlined process focused on delivering the right industrial heating solution for your application."
        />

        {/* Desktop */}

        <div className="relative mt-16 hidden lg:block">
          {/* Line */}

          <div className="absolute left-0 right-0 top-[70px] h-[2px] bg-primary/10" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.8,
            }}
            className="
              absolute
              left-0
              top-[70px]
              h-[3px]
              rounded-full
              bg-accent
            "
          />

          <div className="grid grid-cols-5 gap-6">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
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
                  className="relative text-center"
                >
                  {/* Node */}

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                    }}
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      border
                      border-primary/10
                      bg-white
                      shadow-lg
                    "
                  >
                    <Icon size={28} className="text-accent" />
                  </motion.div>

                  <div className="mt-6">
                    <span
                      className="
                        text-xs
                        font-black
                        tracking-[0.25em]
                        text-accent
                      "
                    >
                      {item.number}
                    </span>

                    <h3
                      className="
                        mt-2
                        text-lg
                        font-black
                        text-primary
                      "
                    >
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}

        <div className="mt-12 lg:hidden">
          <div className="space-y-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[1.5rem]
                    border
                    border-primary/10
                    bg-white
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-accent/10
                    "
                  >
                    <Icon size={20} className="text-accent" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          text-xs
                          font-black
                          text-accent
                        "
                      >
                        {item.number}
                      </span>

                      <h3 className="font-black text-primary">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Status */}

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
            max-w-2xl
            rounded-full
            border
            border-accent/15
            bg-accent/5
            px-6
            py-4
            text-center
          "
        >
          <p className="text-sm font-semibold text-primary">
            Most enquiries receive an initial response within one business day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
