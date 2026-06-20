"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Custom Manufacturing",
    description:
      "Tailored heating solutions developed according to machine specifications and industrial requirements.",
  },
  {
    number: "02",
    title: "Premium Materials",
    description:
      "Manufactured using carefully selected materials for durability, efficiency and long operational life.",
  },
  {
    number: "03",
    title: "High Temperature Resistance",
    description:
      "Engineered to perform reliably in demanding thermal environments and continuous production conditions.",
  },
  {
    number: "04",
    title: "Industrial Grade Quality",
    description:
      "Every product is inspected and tested to ensure dependable industrial performance.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section relative overflow-hidden bg-tertiary">
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(to_right,var(--primary)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Glow */}

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
      {/* 
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="
            absolute
            inset-0
            [background-image:linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(to_right,var(--primary)_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />
      </div> */}

      <div className="container relative">
        <SectionHeader
          tag="Why Choose DR Heater"
          title="Built For Industrial Performance"
          description="Combining engineering expertise, premium manufacturing and dependable industrial reliability."
        />

        <div className="mt-16 space-y-14 lg:space-y-20">
          {features.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
                className={`
                  grid
                  items-center
                  gap-10
                  lg:grid-cols-2
                  ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >
                {/* Hexagon */}

                <div className="flex justify-center">
                  <motion.div
                    whileHover={{
                      y: -12,
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Accent Glow */}

                    <div
                      className="
        absolute
        left-1/2
        top-1/2
        h-[320px]
        w-[320px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-accent/15
        blur-3xl
      "
                    />

                    {/* Outer Hexagon */}

                    <div
                      className="
        absolute
        inset-0
        scale-110
        bg-accent/10
        [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]
      "
                    />

                    {/* Main Hexagon */}

                    <div
                      className="
        relative
        flex
        h-[280px]
        w-[280px]
        items-center
        justify-center
        overflow-hidden
        border
        border-accent/20
        bg-white
        shadow-[0_25px_60px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
        [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]
      "
                    >
                      {/* Inner Glow */}

                      <div
                        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-accent/10
          via-transparent
          to-primary/5
        "
                      />

                      {/* Center Content */}

                      <div className="relative text-center">
                        <span
                          className="
            block
            text-7xl
            font-black
            text-accent/25
          "
                        >
                          {item.number}
                        </span>

                        <div
                          className="
            mx-auto
            mt-4
            h-1.5
            w-20
            rounded-full
            bg-accent
          "
                        />

                        <h3
                          className="
            mt-5
            px-8
            text-2xl
            font-black
            text-primary
          "
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* Animated Shine */}

                      <motion.div
                        animate={{
                          x: ["-150%", "250%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
          absolute
          top-0
          h-full
          w-20
          rotate-12
          bg-white/30
          blur-xl
        "
                      />
                    </div>

                    {/* Floating Accent Dots */}

                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="
        absolute
        -right-4
        top-10
        h-6
        w-6
        rounded-full
        bg-accent
        shadow-lg
      "
                    />

                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="
        absolute
        -left-3
        bottom-12
        h-4
        w-4
        rounded-full
        bg-accent/60
      "
                    />

                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}
                      className="
        absolute
        bottom-4
        right-12
        h-3
        w-3
        rounded-full
        bg-primary/20
      "
                    />
                  </motion.div>
                </div>

                {/* Content */}

                <div>
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
                    Feature {item.number}
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
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-base
                      leading-8
                      text-secondary
                    "
                  >
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-[2px] w-20 bg-accent" />

                    <span className="text-sm font-bold text-accent">Industrial Excellence</span>
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
