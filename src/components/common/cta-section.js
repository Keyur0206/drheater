"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const CTASection = ({
  title,
  description,
  primaryText = "Get Started",
  primaryLink = "/contact",
  secondaryText,
  secondaryLink = "/products",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-primary/15 bg-gradient-to-br from-tertiary to-primary/3 p-8 sm:p-10 lg:p-12 text-center shadow-sm shadow-primary/5"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl font-black text-primary sm:text-3xl lg:text-4xl mb-3"
      >
        {title}
      </motion.h3>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-secondary max-w-2xl mx-auto mb-6 text-base sm:text-lg leading-7"
        >
          {description}
        </motion.p>
      )}

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {/* Primary Button */}
        <Link
          href={primaryLink}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary"
        >
          {primaryText}
          <span>→</span>
        </Link>

        {/* Secondary Button */}
        {secondaryText && (
          <Link
            href={secondaryLink}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary"
          >
            {secondaryText}
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CTASection;
