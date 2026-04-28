"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/95 md:bg-white/90 md:backdrop-blur-md border-b border-[#EAE6EC] shadow-sm sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-6 py-3.5 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            alt="Pallavi Sudhir Medicare Logo"
            className="h-12 w-auto object-contain"
            src="/images/logo.png"
          />
          <span className="font-serif text-lg md:text-xl font-bold text-[#462c78] hidden sm:block">
            Pallavi Sudhir Medicare
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 font-serif text-sm font-medium">
          <a className="text-[#462c78] border-b-2 border-[#462c78] pb-1" href="#">
            Home
          </a>
          <a
            className="text-slate-600 hover:text-[#462c78] hover:bg-[#EAE6EC]/50 transition-colors px-2 py-1 rounded"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-slate-600 hover:text-[#462c78] hover:bg-[#EAE6EC]/50 transition-colors px-2 py-1 rounded"
            href="#doctors"
          >
            Doctors
          </a>
          <a
            className="text-slate-600 hover:text-[#462c78] hover:bg-[#EAE6EC]/50 transition-colors px-2 py-1 rounded"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <button className="bg-primary-container text-on-primary font-body font-semibold px-5 py-2 rounded-lg hover:bg-primary transition-colors shadow-sm hidden sm:block">
          Book Appointment
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-primary-container"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>

        {/* Mobile Navigation Overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-[60] flex flex-col items-center pt-12">
            <nav className="flex flex-col gap-4">
              <a
                onClick={() => setMobileOpen(false)}
                href="#"
                className="text-[#462c78] text-xl font-medium"
              >
                Home
              </a>
              <a
                onClick={() => setMobileOpen(false)}
                href="#services"
                className="text-slate-600 hover:text-[#462c78] hover:bg-[#EAE6EC]/50 transition-colors px-2 py-1 rounded"
              >
                Services
              </a>
              <a
                onClick={() => setMobileOpen(false)}
                href="#doctors"
                className="text-slate-600 hover:text-[#462c78] hover:bg-[#EAE6EC]/50 transition-colors px-2 py-1 rounded"
              >
                Doctors
              </a>
              <a
                onClick={() => setMobileOpen(false)}
                href="#contact"
                className="text-slate-600 hover:text-[#462c78] hover:bg-[#EAE6EC]/50 transition-colors px-2 py-1 rounded"
              >
                Contact
              </a>
            </nav>
            <button
              className="mt-4 py-2 px-4 rounded-md bg-primary text-on-primary"
              onClick={() => setMobileOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
