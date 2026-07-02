"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Cartridge Heater",
    description: "High-density cartridge heaters for dies, moulds and compact industrial tooling.",
    code: "01",
    application: "Precision tooling",
    image: "/product/cartridge(HD)heater.jpeg",
  },
  {
    name: "Nozzle Mica Heater",
    description:
      "Mica insulated nozzle heaters for stable temperature control in plastic machines.",
    code: "02",
    application: "Injection moulding",
    image: "/product/Nozzlemicaheater.jpeg",
  },
  {
    name: "Nozzle Spring Heater",
    description:
      "Spring nozzle heaters built for uniform heating and reliable machine performance.",
    code: "03",
    application: "Hot runner systems",
    image: "/product/Nozzelspringheater.jpeg",
  },
  {
    name: "Mica Band Heater",
    description:
      "Mica band heaters designed for barrels, extrusion units and plastic processing equipment.",
    code: "04",
    application: "Barrels & extrusion",
    image: "/product/Micabandheater.jpeg",
  },
  {
    name: "Ceramic Band Heater",
    description: "Ceramic band heaters delivering higher heat output and long-life performance.",
    code: "05",
    application: "Plastic machinery",
    image: "/product/Ceramicbandheater.jpeg",
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
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-accent/5
    blur-[140px]
  "
        style={{ height: "700px", width: "700px" }}
      />
      <div className="container">
        <SectionHeader
          tag="Product categories"
          title="Choose the heater category for your machine."
          description="Hover a category to expand its details. Built for quick scanning without leaving the page."
        />

        <motion.div
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid gap-3 sm:grid-cols-2 lg:flex lg:gap-2"
          style={{ minHeight: "340px" }}
        >
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              variants={cardVariants}
              transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
              tabIndex={0}
              className="
                  group relative w-full h-48 sm:h-56 lg:hover:flex-[2.45] lg:focus-visible:flex-[2.45]
                  overflow-hidden rounded-[1.35rem]
                  border border-accent/40 bg-tertiary shadow-xl shadow-black/10 cursor-pointer
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-black/20
                  focus-visible:-translate-y-2 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20
                  lg:min-h-0 lg:flex-1 lg:basis-0
                "
              style={{ height: "340px" }}
            >
              <div className="absolute inset-0 bg-white/90">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 300px, 100vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div
                className="absolute inset-0 opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, var(--primary), rgba(43, 38, 36, 0.6), transparent)",
                }}
              />

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

              <div
                className="absolute bottom-0 left-0 right-0 opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100 p-3 sm:p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(43, 38, 36, 0.9), rgba(43, 38, 36, 0.6), transparent)",
                }}
              >
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
