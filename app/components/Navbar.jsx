"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  X,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Grades", href: "#grades" },
  { label: "Specifications", href: "#specifications" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  {
    label: "Weld Neck Flanges",
    href: "#products",
  },
  {
    label: "Slip-On Flanges",
    href: "#products",
  },
  {
    label: "Blind Flanges",
    href: "#products",
  },
  {
    label: "Socket Weld Flanges",
    href: "#products",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  const scrollToSection = (href) => {
    closeMenu();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F4C81] shadow-sm">
              <span className="text-lg font-bold text-white">
                BS
              </span>
            </div>

            <div>
              <p className="text-lg font-bold leading-none tracking-tight text-[#052C4F]">
                BHANSALI
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Stainless Steel
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">

            <button
              type="button"
              onClick={() => scrollToSection("#home")}
              className="text-sm font-medium text-slate-700 transition hover:text-[#0F4C81]"
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => scrollToSection("#products")}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-[#0F4C81]"
              >
                Products
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4"
                  >
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/40">

                      {productLinks.map((product) => (
                        <button
                          key={product.label}
                          type="button"
                          onClick={() =>
                            scrollToSection(product.href)
                          }
                          className="group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-[#0F4C81]/5 hover:text-[#0F4C81]"
                        >
                          <span>{product.label}</span>

                          <ArrowRight
                            size={15}
                            className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </button>
                      ))}

                      {/* View More */}
                      <div className="mt-1 border-t border-slate-100 pt-1">
                        <button
                          type="button"
                          onClick={() =>
                            scrollToSection("#products")
                          }
                          className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-bold text-[#0F4C81] transition hover:bg-[#0F4C81]/10"
                        >
                          View More Products
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-slate-700 transition hover:text-[#0F4C81]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="tel:+919999999999"
              aria-label="Call Bhansali Stainless"
              className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-semibold text-[#052C4F] transition hover:border-[#0F4C81] hover:bg-slate-50"
            >
              <Phone size={16} />
              <span className="hidden xl:inline">
                Call Us
              </span>
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-2 rounded-lg bg-[#0F4C81] px-4 text-sm font-semibold text-white transition hover:bg-[#052C4F]"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#052C4F] transition hover:bg-slate-50 lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="fixed left-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* Sidebar Navbar */}
              <div className="flex h-20 items-center justify-between border-b border-slate-200 px-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F4C81]">
                    <span className="font-bold text-white">
                      BS
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#052C4F]">
                      BHANSALI
                    </p>

                    <p className="text-[8px] uppercase tracking-[0.18em] text-slate-400">
                      Stainless Steel
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Links */}
              <nav className="flex-1 overflow-y-auto px-5 py-5">

                <button
                  type="button"
                  onClick={() => scrollToSection("#home")}
                  className="flex w-full items-center border-b border-slate-100 py-4 text-left text-sm font-semibold text-slate-700"
                >
                  Home
                </button>

                {/* Mobile Products */}
                <div className="border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() =>
                      setIsProductsOpen((prev) => !prev)
                    }
                    className="flex w-full items-center justify-between py-4 text-sm font-semibold text-slate-700"
                  >
                    Products

                    <ChevronDown
                      size={17}
                      className={`transition-transform ${
                        isProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 pl-3">
                          {productLinks.map((product) => (
                            <button
                              key={product.label}
                              type="button"
                              onClick={() =>
                                scrollToSection(product.href)
                              }
                              className="block w-full py-2.5 text-left text-sm text-slate-500"
                            >
                              {product.label}
                            </button>
                          ))}

                          <button
                            type="button"
                            onClick={() =>
                              scrollToSection("#products")
                            }
                            className="flex items-center gap-2 py-2.5 text-sm font-bold text-[#0F4C81]"
                          >
                            View More
                            <ArrowRight size={15} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.slice(1).map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="flex w-full items-center border-b border-slate-100 py-4 text-left text-sm font-semibold text-slate-700"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Sidebar Contact */}
              <div className="border-t border-slate-200 p-5">
                <a
                  href="tel:+919999999999"
                  className="mb-3 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm font-bold text-[#052C4F]"
                >
                  <Phone size={17} />
                  Call Us
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#0F4C81] py-3 text-sm font-bold text-white"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}