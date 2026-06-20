"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import { Boxes, Factory, FlaskConical, Layers3, Package, Settings } from "lucide-react";

const industries = [
  {
    title: "Plastic Industry",
    icon: Factory,
    position: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    title: "Packaging Industry",
    icon: Package,
    position: "left-[2%] top-[38%]",
  },
  {
    title: "Injection Moulding",
    icon: Boxes,
    position: "right-[2%] top-[38%]",
  },
  {
    title: "Extrusion",
    icon: Settings,
    position: "left-[16%] bottom-[8%]",
  },
  {
    title: "Thermoforming",
    icon: Layers3,
    position: "right-[16%] bottom-[8%]",
  },
  {
    title: "Chemical Industry",
    icon: FlaskConical,
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
];

export default function ManufacturingPresenceSection() {
  return (
    <section className="section relative overflow-hidden bg-tertiary">
      {/* Background Grid */}

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

      <div className="container relative">
        <SectionHeader
          tag="Manufacturing Presence"
          title="Serving Industries Across India"
          description="Providing industrial heating solutions for diverse manufacturing sectors with a focus on reliability, efficiency and long-term performance."
        />

        {/* Desktop */}

        <div className="relative mx-auto mt-24 hidden h-[850px] max-w-[1300px] xl:block">
          {/* Rotating Rings */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-primary/10
            "
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[560px]
              w-[560px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-primary/5
            "
          />

          {/* Connection Lines */}

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1300 850">
            {[
              "M650 425 L650 120",
              "M650 425 L170 325",
              "M650 425 L1130 325",
              "M650 425 L280 700",
              "M650 425 L1020 700",
              "M650 425 L650 780",
            ].map((path, index) => (
              <motion.path
                key={index}
                d={path}
                fill="none"
                stroke="currentColor"
                className="text-accent/30"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.12,
                }}
              />
            ))}
          </svg>

          {/* Center Hub */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                flex
                h-[300px]
                w-[300px]
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-primary/10
                bg-white
                shadow-[0_40px_100px_rgba(0,0,0,0.08)]
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-accent/10
                "
              >
                <Factory size={34} className="text-accent" />
              </div>

              <h3 className="text-4xl font-black text-primary">DR Heater</h3>

              <p className="mt-3 text-center text-secondary">
                Industrial Heating Solutions
                <br />
                Across India
              </p>
            </motion.div>
          </motion.div>

          {/* Industry Cards */}

          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className={`absolute z-10 ${item.position}`}
              >
                <div
                  className="
                    w-[240px]
                    rounded-[1.75rem]
                    border
                    border-primary/10
                    bg-white/95
                    p-6
                    shadow-xl
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-accent/30
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-accent/10
                    "
                  >
                    <Icon size={22} className="text-accent" />
                  </div>

                  <h4 className="font-black text-primary">{item.title}</h4>

                  <p className="mt-2 text-sm leading-6 text-secondary">
                    Reliable heating solutions engineered for demanding manufacturing environments.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile + Tablet */}

        <div className="mt-14 xl:hidden">
          <div
            className="
              rounded-[2rem]
              border
              border-primary/10
              bg-white
              p-8
              text-center
              shadow-sm
            "
          >
            <Factory size={34} className="mx-auto text-accent" />

            <h3 className="mt-4 text-2xl font-black text-primary">
              Serving Industries Across India
            </h3>

            <p className="mt-3 text-secondary">
              Supporting manufacturing industries with dependable industrial heating solutions.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[1.5rem]
                    border
                    border-primary/10
                    bg-white
                    p-5
                    shadow-sm
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-accent/10
                      "
                    >
                      <Icon size={20} className="text-accent" />
                    </div>

                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>

                      <p className="mt-1 text-sm text-secondary">Industrial applications</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
