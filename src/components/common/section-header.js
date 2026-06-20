"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const SectionHeader = ({ tag, title, description }) => {
  return (
    <div className="mb-7 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
        className="max-w-2xl"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-3 inline-flex rounded-full border border-primary/10 bg-secondary/5 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase text-secondary"
        >
          {tag}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-black leading-tight text-primary sm:text-3xl lg:text-4xl"
        >
          {title}
        </motion.h2>
      </motion.div>

      {description && (
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-md text-sm leading-6 text-secondary"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
