"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Cartridge Heater",
    description: "Compact heaters for dies, molds and precision tools.",
    code: "01",
    application: "Dies & molds",
  },
  {
    name: "Nozzle Heater",
    description: "Stable heating for injection molding nozzle zones.",
    code: "02",
    application: "Molding zones",
  },
  {
    name: "Coil Heater",
    description: "Flexible heating for hot runner and compact assemblies.",
    code: "03",
    application: "Hot runners",
  },
  {
    name: "Tubular Heater",
    description: "Formed heating elements for ovens, air and process systems.",
    code: "04",
    application: "Ovens & air",
  },
  {
    name: "Mica & Ceramic Band Heater",
    description: "Reliable barrel heating for plastic processing machinery.",
    code: "05",
    application: "Barrels",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ProductCategories = () => {
  return (
    <section className="relative overflow-hidden bg-tertiary py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-primary/10" />
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
      <div className="container">
        <SectionHeader
          tag="Product categories"
          title="Choose the heater category for your machine."
          description="Hover a category to expand its details. Built for quick scanning without leaving the page."
        />

        <motion.div
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-3 sm:grid-cols-2 lg:flex lg:h-[340px] lg:gap-2"
        >
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              variants={cardVariants}
              transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
              tabIndex={0}
              className="
                  group relative w-full h-48 sm:h-56 lg:h-[340px] lg:hover:flex-[2.45] lg:focus-visible:flex-[2.45]
                  overflow-hidden rounded-[1.35rem]
                  border border-accent/40 bg-tertiary shadow-xl shadow-black/10 cursor-pointer
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-black/20
                  focus-visible:-translate-y-2 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20
                  lg:min-h-0 lg:flex-1 lg:basis-0
                "
            >
              <Image
                src="/industrial-heaters-hero.png"
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 300px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 flex items-start justify-end gap-3">
                <span
                  className="
  flex h-9 w-9 shrink-0 items-center justify-center rounded-full
  border border-accent/30
  bg-white
  text-base font-black text-accent
  transition-all duration-300
  group-hover:bg-accent
  group-hover:text-white
  group-hover:translate-x-1
"
                >
                  &rarr;
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 p-3 sm:p-4">
                <p className="max-w-xs text-lg font-black leading-tight text-transparent lg:group-hover:text-white  sm:text-xl lg:[writing-mode:vertical-rl] lg:rotate-180 lg:transition-all lg:duration-500 lg:group-hover:rotate-0 lg:group-hover:[writing-mode:horizontal-tb] lg:group-focus-visible:rotate-0 lg:group-focus-visible:[writing-mode:horizontal-tb]">
                  {product.name}
                </p>

                <div className="mt-4 space-y-2 opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100 transition-opacity duration-500">
                  <p className="text-sm font-medium leading-6 text-transparent lg:group-hover:text-white">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.66rem] font-bold uppercase text-transparent lg:group-hover:text-white">
                      Application
                    </span>
                    <span className="text-right text-xs font-black text-transparent lg:group-hover:text-white">
                      {product.application}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
