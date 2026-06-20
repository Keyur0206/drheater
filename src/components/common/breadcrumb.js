"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const labelMap = {
  "/": "Home",
  "/about": "About Us",
  "/products": "Products",
  "/contact": "Contact",
};

export default function BreadcrumbSection({
  title = "About DR Heater",
  description = "Manufacturing reliable industrial heating solutions with precision engineering and quality-driven processes.",
}) {
  const pathname = usePathname();

  const breadcrumbs = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: labelMap[pathname] || "Page",
      path: pathname,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] py-10 sm:py-14 lg:py-20">
      {/* Background Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(to_right,#000_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <div className="container relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-primary/10
            bg-white
            px-6
            py-8
            shadow-sm
            sm:px-8
            lg:px-10
            lg:py-10
          "
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Left Content */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-orange-500/10
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-orange-500
                "
              >
                <Factory size={14} />
                DR Heater
              </div>

              <h1
                className="
                  mt-5
                  text-3xl
                  font-black
                  text-primary
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {title}
              </h1>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-secondary
                  sm:text-base
                "
              >
                {description}
              </p>
            </div>

            {/* Right Side */}

            <div className="flex flex-col items-start gap-5 lg:items-end">
              {/* Floating Card */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-primary
                  px-5
                  py-4
                  text-white
                  shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500
                  "
                >
                  <Factory size={18} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Industrial</p>

                  <h4 className="font-bold">Heating Solutions</h4>
                </div>
              </div>

              {/* Breadcrumb */}

              <div className="flex flex-wrap items-center gap-3">
                {breadcrumbs.map((item, index) => (
                  <div key={item.path} className="flex items-center gap-3">
                    {index === breadcrumbs.length - 1 ? (
                      <span
                        className="
                          rounded-full
                          bg-primary
                          px-3
                          py-3
                          text:xs
                           sm:text-sm
                          font-semibold
                          text-white
                        "
                      >
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.path}
                        className="
                          rounded-full
                          border
                          border-primary/10
                          bg-white
                          px-3
                          py-3
                           text:xs
                           sm:text-sm
                          font-semibold
                          text-primary
                          transition-all
                          hover:border-orange-500
                          hover:text-orange-500
                        "
                      >
                        {item.label}
                      </Link>
                    )}

                    {index < breadcrumbs.length - 1 && (
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          shadow-sm
                        "
                      >
                        <ArrowRight size={16} className="text-orange-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
