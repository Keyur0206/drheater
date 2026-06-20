"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  "Cartridge Heater",
  "Nozzle Heater",
  "Coil Heater",
  "Tubular Heater",
  "Band Heater",
  "Thermocouple",
];

const pillars = [
  {
    title: "Custom Manufacturing",
    description:
      "Tailor-made heating solutions designed around your machinery and production requirements.",
    position: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    title: "Industrial Grade",
    description: "Manufactured using premium materials for long operational life.",
    position: "top-1/2 right-0 -translate-y-1/2",
  },
  {
    title: "High Temperature",
    description: "Reliable thermal performance in demanding industrial environments.",
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    title: "Precision",
    description: "Engineered for uniform heating and consistent results.",
    position: "top-1/2 left-0 -translate-y-1/2",
  },
];

export default function AboutSection() {
  return (
    <section className="section relative overflow-hidden bg-tertiary">
      {/* Background Effects */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full border border-primary/5"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-40 bottom-10 h-[600px] w-[600px] rounded-full border border-primary/5"
      />

      <div className="container relative">
        <SectionHeader
          tag="About Us"
          title="Engineering Industrial Heat With Precision"
          description="Manufacturing custom industrial heating elements and thermal solutions for modern production systems."
        />

        {/* Top Layout */}

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Industrial Heating Solutions
            </span>

            <h3 className="mt-6 text-4xl font-black leading-[1.05] text-primary lg:text-6xl">
              Built For Heat.
              <br />
              Designed For Industry.
            </h3>

            <p className="mt-6 max-w-xl text-base leading-8 text-secondary">
              Delivering precision-engineered industrial heaters for extrusion, molding, packaging,
              plastic processing, thermocouple systems and custom heating applications.
            </p>

            {/* Mini Feature List */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {["Custom Solutions", "Premium Materials", "Fast Delivery", "Industrial Grade"].map(
                (item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      x: 10,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-orange-500" />

                    <span className="font-medium text-primary">{item}</span>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-3 shadow-2xl">
              <Image
                src="/industrial-heaters-hero.png"
                alt="Industrial Manufacturing"
                width={900}
                height={900}
                className="h-[350px] sm:h-[450px] lg:h-[550px] w-full rounded-[1.5rem] object-cover"
              />

              {/* Gradient Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-[1.5rem]" />

              {/* Experience Card */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
        absolute
        left-4
        top-4
        sm:left-6
        sm:top-6
      "
              >
                <div className="rounded-2xl bg-white/95 px-4 py-3 backdrop-blur shadow-xl">
                  <h4 className="text-xl sm:text-3xl font-black text-primary">15+</h4>

                  <p className="text-[11px] sm:text-sm text-secondary">Years Experience</p>
                </div>
              </motion.div>

              {/* Bottom Content */}

              <div className="absolute bottom-5 left-5 right-5">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-white text-xl sm:text-3xl font-black"
                >
                  Precision Engineered
                </motion.h4>

                <p className="mt-2 max-w-md text-sm text-white/80">
                  Custom industrial heating systems built for reliability, efficiency and long-term
                  performance.
                </p>

                {/* Tags */}

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Custom Fit", "Industrial Grade", "Premium Materials"].map((tag, index) => (
                    <motion.div
                      key={tag}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: index * 0.2,
                        repeat: Infinity,
                      }}
                      className="
              rounded-full
              bg-white/90
              px-3
              py-2
              text-xs
              font-semibold
              text-primary
              backdrop-blur
            "
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Belt */}

        <div className="relative mt-20 overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-tertiary to-transparent" />

          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-tertiary to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-5"
          >
            {[...products, ...products, ...products].map((item, index) => (
              <div
                key={index}
                className="rounded-full border border-primary/10 bg-white px-6 py-3 shadow-sm"
              >
                <span className="font-semibold text-primary">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
