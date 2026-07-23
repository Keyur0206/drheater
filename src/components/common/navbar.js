"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActivePath = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = isOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50
          transition-all duration-500
          py-3 lg:py-4
          supports-backdrop-filter:backdrop-blur-2xl

          ${scrolled ? "bg-tertiary/92" : "bg-tertiary/78"}
        `}
      >
        <div className="container">
          <div
            className={`
              flex items-center justify-between gap-4
              rounded-[1.75rem] border border-primary/10 bg-tertiary/82 px-3.5 py-3
              transition-all duration-500
              shadow-lg shadow-primary/5 backdrop-blur-xl
              sm:px-4 lg:px-5

              ${
                scrolled
                  ? "border-primary/15 bg-tertiary/92 shadow-xl shadow-primary/10"
                  : "border-primary/10 bg-tertiary/82"
              }
            `}
          >
            <Link href="/" aria-label="Dr. Heater home" className="group flex min-w-0 items-center">
              <Image
                src="/logo.png"
                alt="DR Heater"
                width={240}
                height={80}
                priority
                className="
      h-12
      w-auto
      object-contain
      transition-transform
      duration-300
      group-hover:scale-105

      sm:h-13
      lg:h-16
    "
              />
            </Link>

            <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = isActivePath(link.path);

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      relative rounded-full px-5 py-2.5
                      text-sm font-bold
                      transition-all duration-300 xl:px-6

                      ${
                        isActive
                          ? "bg-primary text-tertiary shadow-lg shadow-primary/20"
                          : "text-secondary hover:bg-primary/5 hover:text-primary"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link href="/contact" className="btn-primary min-h-11 px-5">
                Get Started
              </Link>
            </div>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="
                flex h-12 w-12 shrink-0 items-center justify-center rounded-full
                border border-primary/10 bg-tertiary text-primary shadow-sm shadow-primary/10
                transition-all duration-300 hover:border-primary/25 hover:bg-primary/5
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15
                lg:hidden
              "
            >
              <span className="relative h-5 w-6">
                <span
                  className={`
                    absolute left-0 top-0
                    h-0.5 w-6 rounded-full
                    bg-primary
                    transition-all duration-300

                    ${isOpen ? "translate-y-2 rotate-45" : ""}
                  `}
                />

                <span
                  className={`
                    absolute left-0 top-2
                    h-0.5 w-6 rounded-full
                    bg-primary
                    transition-all duration-300

                    ${isOpen ? "opacity-0" : ""}
                  `}
                />

                <span
                  className={`
                    absolute left-0 top-4
                    h-0.5 w-6 rounded-full
                    bg-primary
                    transition-all duration-300

                    ${isOpen ? "-translate-y-2 -rotate-45" : ""}
                  `}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`
          fixed inset-0 z-9999
          bg-primary/30 p-3 backdrop-blur-xl sm:p-5

          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${isOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
      >
        <div
          className={`
            mx-auto flex h-full max-w-2xl flex-col overflow-hidden rounded-4xl
            border border-tertiary/80 bg-tertiary shadow-2xl shadow-primary/25
            transition-all duration-500

            ${isOpen ? "translate-y-0 scale-100" : "-translate-y-5 scale-[0.98]"}
          `}
        >
          <div className="flex items-center justify-between gap-4 border-b border-primary/10 px-5 py-4 sm:px-6">
            <Link href="/" aria-label="Dr. Heater home" className="flex min-w-0 items-center">
              <span className="relative text-2xl font-black tracking-tight text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-10 after:rounded-full after:bg-primary">
                Dr. Heater
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="
                flex h-12 w-12 shrink-0 items-center justify-center rounded-full
                border border-primary/10 bg-tertiary text-primary shadow-sm shadow-primary/10
                transition-all duration-300 hover:rotate-90 hover:border-primary/25 hover:bg-primary/5
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15
              "
            >
              <span className="relative h-5 w-5">
                <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-primary" />
                <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-primary" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-between px-5 py-8 sm:px-6 sm:py-10">
            <div className="grid gap-4">
              {navLinks.map((link, index) => {
                const isActive = isActivePath(link.path);

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`
                      group flex items-center justify-between rounded-3xl border px-6 py-5
                      text-2xl font-black tracking-tight
                      transition-all duration-500 sm:text-3xl

                      ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}

                      ${
                        isActive
                          ? "border-primary bg-primary text-tertiary shadow-xl shadow-primary/20"
                          : "border-primary/10 bg-secondary/5 text-primary hover:border-primary/20 hover:bg-primary/5"
                      }
                    `}
                    style={{
                      transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
                    }}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`
                        flex h-9 w-9 items-center justify-center rounded-full text-base transition-all duration-300
                        ${
                          isActive
                            ? "bg-tertiary/15 text-tertiary"
                            : "bg-tertiary text-primary group-hover:translate-x-1"
                        }
                      `}
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </Link>
                );
              })}
            </div>

            <div
              className={`
                mt-8 grid gap-4 transition-all duration-700
                ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
              `}
              style={{
                transitionDelay: isOpen ? "320ms" : "0ms",
              }}
            >
              {/* <div className="rounded-3xl border border-primary/10 bg-secondary/5 p-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                  Need help choosing?
                </p>
                <p className="mt-2 text-base leading-7 text-secondary">
                  Talk to our team for a heating setup that fits your space.
                </p>
              </div> */}

              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
