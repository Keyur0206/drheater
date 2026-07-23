"use client";

import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    image: "/product/one.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ProductCategories = () => {
  return (
    <section className="relative overflow-hidden bg-tertiary py-12 sm:py-14 lg:py-16">
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
          className="grid gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        >
          {products.map((product, index) => (
            <Link key={product.name} href="/products" className="block h-full">
              <motion.article
                variants={cardVariants}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                tabIndex={0}
                className="
                    group relative overflow-hidden rounded-2xl
                    border border-accent/15 bg-white 
                    shadow-lg shadow-black/8
                    transition-all duration-400 ease-out
                    hover:shadow-xl hover:shadow-accent/25
                    hover:border-accent/50
                    hover:-translate-y-3
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                    h-full flex flex-col
                  "
              >
                {/* Code Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex px-3.5 py-1.5 rounded-lg bg-accent/15 text-accent font-black text-xs sm:text-sm uppercase tracking-widest">
                    {product.code}
                  </span>
                </div>

                {/* Image Container - Responsive height */}
                <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 bg-white overflow-hidden border-b border-primary/8 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-6 xs:p-8 transition-transform duration-500 group-hover:scale-125"
                    priority={index < 2}
                  />

                  {/* Hover Arrow Badge */}
                  <motion.div
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.15, rotate: 45 }}
                  >
                    <span className="flex h-10 w-10 xs:h-11 xs:w-11 items-center justify-center rounded-full border-2 border-accent bg-white text-accent text-sm font-black shadow-lg">
                      →
                    </span>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5 xs:p-6 sm:p-7 flex flex-col justify-between">
                  {/* Title Only */}
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-black text-primary leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* CTA - Always visible with accent */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-accent font-black uppercase text-xs tracking-widest cursor-pointer"
                  >
                    <div className="h-[2px] w-6 xs:w-7 rounded-full bg-accent" />
                    <span>Explore</span>
                  </motion.div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
