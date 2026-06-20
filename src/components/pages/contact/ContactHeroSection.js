"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    type: "phone",
    values: ["+91 93742 34140", "+91 83209 07970"],
  },
  {
    icon: Mail,
    title: "Email Us",
    type: "email",
    values: ["drheater2@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Location",
    type: "location",
    values: ["Ahmedabad, Gujarat"],
  },
];

export default function ContactIntroSection() {
  return (
    <section className="bg-tertiary py-14 lg:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[2rem]
            border
            border-primary/10
            bg-white
          "
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left */}

            <div className="p-8 lg:p-12">
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
                Contact DR Heater
              </span>

              <h2
                className="
                  mt-6
                  text-3xl
                  font-black
                  leading-tight
                  text-primary
                  lg:text-5xl
                "
              >
                Let&apos;s Build The Right Heating Solution For Your Industry
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  leading-8
                  text-secondary
                "
              >
                Whether you need custom industrial heaters, technical guidance or product
                information, our team is ready to assist with your requirements.
              </p>
            </div>

            {/* Right */}

            <div
              className="
                border-t
                border-primary/10
                lg:border-l
                lg:border-t-0
              "
            >
              <div className="h-full p-6 lg:p-8">
                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="
          flex
          items-start
          gap-4
          rounded-2xl
          border
          border-primary/10
          p-4
          transition-all
          duration-300
          hover:border-accent/30
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

                        <div className="min-w-0">
                          <p className="text-sm text-secondary">{item.title}</p>

                          <div className="mt-1 space-y-1">
                            {item.values.map((value) => (
                              <div key={value}>
                                {item.type === "phone" ? (
                                  <a
                                    href={`tel:${value.replace(/\s/g, "")}`}
                                    className="
                      block
                      font-bold
                      text-primary
                      transition-colors
                      hover:text-accent
                    "
                                  >
                                    {value}
                                  </a>
                                ) : item.type === "email" ? (
                                  <a
                                    href={`mailto:${value}`}
                                    className="
                      break-all
                      font-bold
                      text-primary
                      transition-colors
                      hover:text-accent
                    "
                                  >
                                    {value}
                                  </a>
                                ) : (
                                  <span className="font-bold text-primary">{value}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="
    mt-6
    rounded-2xl
    bg-primary
    p-5
    text-white
  "
                >
                  <div className="flex items-center gap-3">
                    <Clock size={18} />

                    <span className="font-semibold">Quick Support</span>
                  </div>

                  <p className="mt-2 text-sm text-white/80">
                    Contact us by phone or email for product inquiries, technical assistance and
                    custom industrial heating solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
