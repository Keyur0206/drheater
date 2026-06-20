"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-primary text-white">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          {/* Company Info */}

          <div>
            <h3 className="text-3xl font-black">
              DR<span className="text-accent">.</span> Heater
            </h3>

            <p className="mt-5 max-w-md leading-7 text-white/70">
              Manufacturing custom industrial heating elements and thermal solutions for plastic
              processing, packaging, extrusion, thermoforming and industrial applications.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>

            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/" className="text-white/70 transition hover:text-accent">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="text-white/70 transition hover:text-accent">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/products" className="text-white/70 transition hover:text-accent">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/contact" className="text-white/70 transition hover:text-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}

          <div>
            <h4 className="text-lg font-bold text-white">Contact Information</h4>

            <div className="mt-5 space-y-5">
              <a
                href="tel:+919374234140"
                className="flex items-start gap-3 text-white/70 transition hover:text-accent"
              >
                <Phone size={18} className="mt-1 shrink-0" />

                <span>
                  +91 93742 34140
                  <br />
                  +91 83209 07970
                </span>
              </a>

              <a
                href="mailto:drheater2@gmail.com"
                className="flex items-start gap-3 text-white/70 transition hover:text-accent"
              >
                <Mail size={18} className="mt-1 shrink-0" />

                <span>drheater2@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="mt-1 shrink-0" />

                <span>
                  Shop No. 45, Heritage Industrial Park,
                  <br />
                  Rd No. 5, Nr. KNH Automation Pvt. Ltd.,
                  <br />
                  Kotlam Mahindra Bank,
                  <br />
                  Kathwada GIDC, Odhav Industrial Estate,
                  <br />
                  Kathwada, Ahmedabad, Gujarat 382430
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/60 md:flex-row">
            <p>© {new Date().getFullYear()} DR Heater. All Rights Reserved.</p>

            <p>Industrial Heating Solutions • Custom Manufacturing • India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
