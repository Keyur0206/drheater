"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const productLines = ["Cartridge", "Band", "Tubular", "Immersion"];

const applications = ["Plastic processing", "Packaging machinery", "Ovens & tanks"];

const imageStats = [
  { label: "Range", value: "4 types" },
  { label: "Fitment", value: "Custom" },
  { label: "Use", value: "Industry" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96, x: 24 },
  show: { opacity: 1, scale: 1, x: 0 },
};

const Hero = () => {
  return (
    <section className="section relative isolate overflow-hidden border-t border-primary/10 bg-tertiary !py-7 sm:!py-8 lg:min-h-[calc(100svh-92px)] lg:!py-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.035]" />

      <div className="container relative grid min-h-full items-center gap-5 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
        <div
          className="
    absolute
    left-1/2
    top-1/2
    h-[800px]
    w-[800px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-accent/5
    blur-[140px]
  "
        />
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08 }}
          className="flex min-h-0 flex-col justify-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-tertiary px-3.5 py-1.5 text-[0.7rem] font-bold uppercase text-secondary shadow-sm shadow-primary/5"
          >
            <>
              <span className="h-2 w-2 rounded-full bg-accent" />
              Industrial heating manufacturer
            </>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl text-2xl font-black leading-[1.08] tracking-normal text-primary sm:text-4xl lg:text-[3rem] xl:text-[3.35rem]"
          >
            Precision heaters for machines, molds and process lines.
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 110 }}
            transition={{ duration: 0.8 }}
            className="
    mt-4
    h-1
    rounded-full
    bg-accent
  "
          />
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-3 max-w-xl text-sm leading-6 text-secondary sm:text-base lg:mt-4"
          >
            Dr. Heater supplies industrial electric heaters engineered for stable temperature,
            reliable fitment and day-to-day production use.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 flex flex-wrap items-center gap-2.5 lg:mt-4"
          >
            <Link href="/products" className="btn-primary">
              View Product Range
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request Quote
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 grid max-w-xl grid-cols-2 gap-2 rounded-[1.25rem] border border-primary/10 bg-tertiary/90 p-2 shadow-lg shadow-primary/5 sm:grid-cols-4"
          >
            {productLines.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
                className="
  rounded-2xl
  border
  border-accent/15
  bg-accent/[0.03]
  px-3
  py-2
  text-center
  transition-all
  duration-300
  hover:border-accent/40
"
              >
                <p className="text-[0.68rem] font-bold uppercase leading-5 text-primary">{item}</p>
                <p className="text-[0.66rem] font-semibold leading-4 text-secondary">Heaters</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-3 hidden max-w-2xl items-center gap-2 text-xs font-semibold text-secondary sm:flex"
          >
            {applications.map((item) => (
              <span
                key={item}
                className="
  rounded-full
  border
  border-accent/15
  bg-accent/[0.04]
  px-3
  py-1.5
"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative flex min-h-0 items-center justify-center pt-1 lg:justify-end lg:pt-0">
          <motion.div
            initial="hidden"
            animate="show"
            variants={imageReveal}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            className="relative w-full max-w-[390px] overflow-hidden rounded-[1.5rem] border border-accent/40 bg-tertiary p-2 shadow-2xl shadow-primary/15 ring-1 ring-tertiary sm:max-w-[470px] lg:max-w-[440px]"
          >
            <div className="overflow-hidden rounded-[1.25rem] border border-primary/10 bg-tertiary">
              <div className="flex items-center justify-between gap-4 border-b border-primary/10 bg-tertiary px-4 py-3">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase text-secondary">Product range</p>
                  <p className="mt-1 text-base font-black text-primary sm:text-lg">
                    Industrial heater assemblies
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-accent/15 bg-secondary/5 px-3 py-1.5 text-[0.66rem] font-black uppercase text-primary">
                  Custom fit
                </span>
              </div>

              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[1.7] w-full overflow-hidden bg-tertiary sm:aspect-[1.42] lg:aspect-[1.38]"
              >
                <Image
                  src="/industrial-heaters-hero.png"
                  alt="Industrial electric heaters arranged as a professional product showcase"
                  fill
                  priority
                  sizes="(min-width: 1024px) 470px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-tertiary via-tertiary/75 to-tertiary/0" />
              </motion.div>

              <div className="grid grid-cols-3 border-t border-primary/10 bg-tertiary">
                {imageStats.map((item, index) => (
                  <div
                    key={item.label}
                    className={`px-3 py-2.5 ${index !== imageStats.length - 1 ? "border-r border-primary/10" : ""}`}
                  >
                    <p className="text-[0.62rem] font-bold uppercase text-secondary">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs font-black text-primary sm:text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
