"use client";

import SectionHeader from "@/components/common/section-header";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Cartridge Heater",
    image: "/product/cartridge(HD)heater.jpeg",
    applications: ["Dies & Moulds", "Packaging", "Plastic Industry"],
    description:
      "High-density cartridge heaters built for precision heating in dies, moulds, and compact industrial tooling.",
    specifications: [
      "SS 304 / SS 316 Construction",
      "High Density Design",
      "Up To 750°C",
      "Custom Sizes Available",
    ],
  },
  {
    id: 2,
    name: "Nozzle Mica Heater",
    image: "/product/Nozzlemicaheater.jpeg",
    applications: ["Injection Moulding", "Extrusion", "Plastic Processing"],
    description:
      "Mica nozzle heaters designed for stable temperature control and efficient heat transfer in plastic processing machines.",
    specifications: [
      "Mica Insulated Body",
      "Energy Efficient",
      "Uniform Heating",
      "Long Service Life",
    ],
  },
  {
    id: 3,
    name: "Nozzle Spring Heater",
    image: "/product/Nozzelspringheater.jpeg",
    applications: ["Hot Runner", "Nozzle Heating", "Plastic Machines"],
    description:
      "Spring nozzle heaters built for uniform heating and reliable performance in injection moulding systems.",
    specifications: ["Compact Design", "High Watt Density", "Fast Response", "Custom Fit"],
  },
  {
    id: 4,
    name: "Mica Band Heater",
    image: "/product/Micabandheater.jpeg",
    applications: ["Barrels", "Plastic Machines", "Extrusion"],
    description:
      "Mica band heaters engineered for barrels, extrusion units, and plastic processing machinery.",
    specifications: [
      "Mica Insulation",
      "Efficient Heat Transfer",
      "Robust Construction",
      "Easy Installation",
    ],
  },
  {
    id: 5,
    name: "Ceramic Band Heater",
    image: "/product/one.png",
    applications: ["Extrusion", "Injection Moulding", "Plastic Machinery"],
    description:
      "Ceramic band heaters delivering high heat output, long life, and dependable process stability.",
    specifications: [
      "Ceramic Insulation",
      "High Temperature Support",
      "Durable Performance",
      "Energy Saving",
    ],
  },
  {
    id: 6,
    name: "Perforated Heater",
    image: "/product/Proforetedheater.jpeg",
    applications: ["Temperature Monitoring", "Process Control"],
    description:
      "Perforated heaters designed for controlled heating with better airflow and efficient thermal distribution.",
    specifications: [
      "Perforated Body",
      "Even Heat Distribution",
      "Quick Heating",
      "Industrial Grade",
    ],
  },
  {
    id: 7,
    name: "Finned Air Heater",
    image: "/product/Airheater.png",
    applications: ["Air Heating", "Drying Systems", "Industrial Equipment"],
    description:
      "Finned air heaters built for efficient air heating, drying, and process temperature applications.",
    specifications: [
      "Finned Design",
      "Fast Heat Transfer",
      "Corrosion Resistant",
      "Custom Wattage",
    ],
  },
  {
    id: 8,
    name: "Finch Heater",
    image: "/product/Finchheater.jpeg",
    applications: ["Air Heating", "Process Systems", "Industrial Drying"],
    description:
      "Compact finch heaters designed for efficient thermal transfer in industrial air and drying applications.",
    specifications: [
      "Compact Form Factor",
      "Fast Heat Response",
      "Uniform Air Flow",
      "Industrial Grade",
    ],
  },
  {
    id: 9,
    name: "Power Saver Heater",
    image: "/product/Powersaverheater.jpeg",
    applications: ["Energy Saving", "Process Heating", "Custom Machines"],
    description:
      "Power saver heaters built to deliver efficient heating performance while reducing energy consumption.",
    specifications: ["Energy Efficient", "High Performance", "Durable Build", "Custom Design"],
  },
  {
    id: 10,
    name: "Industrial Heater Jacket",
    image: "/product/two.jpeg",
    applications: ["Thermal Insulation", "Heat Retention", "Industrial Equipment"],
    description:
      "Industrial heater jackets designed for thermal insulation and heat retention in heating elements and equipment.",
    specifications: [
      "High Temperature Insulation",
      "Thermal Protection",
      "Durable Material",
      "Custom Fit Available",
    ],
  },
  {
    id: 11,
    name: "Industrial Heater Cover",
    image: "/product/three.jpeg",
    applications: ["Equipment Protection", "Safety", "Thermal Isolation"],
    description:
      "Industrial heater covers engineered for equipment protection, safety, and thermal isolation in industrial applications.",
    specifications: ["Protective Design", "Heat Resistant", "Easy Installation", "Long Lifespan"],
  },
];

export default function ProductShowcaseSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="section overflow-hidden bg-tertiary">
      <div className="container">
        <SectionHeader
          tag="Our Products"
          title="Industrial Heating Solutions"
          description="Explore our complete range of industrial heaters and thermal products engineered for reliability, efficiency and long-term performance."
        />

        {/* Product Grid */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              onClick={() => setSelectedProduct(product)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-4xl
                border
                border-primary/10
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:shadow-xl
              "
            >
              <div className="relative aspect-4/3 overflow-hidden bg-white/90">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="
                    object-contain
                    p-4
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-lg
                  "
                >
                  <ArrowUpRight size={18} className="text-accent" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-primary">{product.name}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.applications.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-accent/10
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-accent
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div
                  className="
                    mt-5
                    h-0.75
                    w-14
                    rounded-full
                    bg-accent
                    transition-all
                    duration-300
                    group-hover:w-24
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="
        fixed
        inset-0
        z-999
        flex
        items-center
        justify-center
        bg-black/60
        p-4
        backdrop-blur-md
      "
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
          relative
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
            rounded-4xl
          border
          border-primary/10
          bg-white
          shadow-2xl
        "
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="
            sticky
            right-5
            top-5
            ml-auto
            mr-5
            mt-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-primary
            text-white
          "
              >
                <X size={18} />
              </button>

              <div className="px-6 pb-8 lg:px-10 lg:pb-10">
                {/* Header */}

                <span
                  className="
              inline-flex
              rounded-full
              bg-accent/10
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-accent
            "
                >
                  Industrial Heating Product
                </span>

                <h2 className="mt-5 text-3xl font-black text-primary lg:text-5xl">
                  {selectedProduct.name}
                </h2>

                <p className="mt-5 leading-8 text-secondary">{selectedProduct.description}</p>

                {/* Applications */}

                <div className="mt-10">
                  <h3 className="text-xl font-black text-primary">Applications</h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {selectedProduct.applications.map((item) => (
                      <span
                        key={item}
                        className="
                    rounded-full
                    border
                    border-primary/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-primary
                  "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Data */}

                <div className="mt-10">
                  <h3 className="text-xl font-black text-primary">Technical Data</h3>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-primary/10 p-4">
                      <p className="text-xs uppercase text-secondary">Sheath Material</p>

                      <h4 className="mt-2 font-semibold text-primary">SS304 / SS316 / Incoloy</h4>
                    </div>

                    <div className="rounded-xl border border-primary/10 p-4">
                      <p className="text-xs uppercase text-secondary">Heating Element</p>

                      <h4 className="mt-2 font-semibold text-primary">Nichrome Wire</h4>
                    </div>

                    <div className="rounded-xl border border-primary/10 p-4">
                      <p className="text-xs uppercase text-secondary">Insulation</p>

                      <h4 className="mt-2 font-semibold text-primary">MgO Powder</h4>
                    </div>

                    <div className="rounded-xl border border-primary/10 p-4">
                      <p className="text-xs uppercase text-secondary">Temperature</p>

                      <h4 className="mt-2 font-semibold text-primary">Up To 750°C</h4>
                    </div>

                    <div className="rounded-xl border border-primary/10 p-4">
                      <p className="text-xs uppercase text-secondary">MOQ</p>

                      <h4 className="mt-2 font-semibold text-primary">10 PCS</h4>
                    </div>

                    <div className="rounded-xl border border-primary/10 p-4">
                      <p className="text-xs uppercase text-secondary">Warranty</p>

                      <h4 className="mt-2 font-semibold text-primary">Manufacturing Defect</h4>
                    </div>
                  </div>
                </div>

                {/* Features */}

                <div className="mt-10">
                  <h3 className="text-xl font-black text-primary">Product Features</h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selectedProduct.specifications.map((feature) => (
                      <div
                        key={feature}
                        className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-tertiary
                    p-4
                  "
                      >
                        <span className="h-2 w-2 rounded-full bg-accent" />

                        <span className="text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}

                <div
                  className="
              mt-10
              rounded-3xl
              bg-primary
              p-6
              text-white
            "
                >
                  <h3 className="text-xl font-bold">Need A Custom Heater Solution?</h3>

                  <p className="mt-3 text-white/80">
                    DR Heater manufactures custom industrial heating elements according to machine
                    dimensions, temperature requirements and industrial applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
