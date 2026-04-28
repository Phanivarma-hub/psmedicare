import React from "react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-[#EAE6EC] w-full py-14 md:py-16 px-6 flex flex-col items-center gap-8 border-t border-[#462c78]/10 mt-auto">
      <ScrollReveal className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <span className="font-serif text-xl font-bold text-[#462c78] leading-tight">
            Pallavi Sudhir Medicare
          </span>
          <p className="font-body text-sm text-slate-700 leading-7">
            A new milestone in healthcare for Bhimavaram, providing advanced medical care and
            compassionate service.
          </p>
        </div>
        {/* Contact */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <h4 className="font-body text-xs font-bold text-[#462c78] tracking-widest uppercase">
            CONTACT US
          </h4>
          <div className="flex items-start gap-2 text-sm text-slate-700">
            <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
            <p>
              D.No 24-10-3, Ward No.1 DNR College Road, Srirampuram Bhimavaram, W.G. District Andhra
              Pradesh - 534202
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="material-symbols-outlined text-base">call</span>
            <p>08816 22 3344</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <span className="material-symbols-outlined text-base">mail</span>
            <p>info@psmedicare</p>
          </div>
        </div>
        {/* Hours */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <h4 className="font-body text-xs font-bold text-[#462c78] tracking-widest uppercase">
            WORKING HOURS
          </h4>
          <div className="flex justify-between text-sm text-slate-700 border-b border-[#462c78]/10 pb-2">
            <span>Mon - Sat</span>
            <span className="font-semibold text-[#462c78]">24 Hours</span>
          </div>
          <div className="flex justify-between text-sm text-slate-700 border-b border-[#462c78]/10 pb-2">
            <span>Sunday</span>
            <span className="font-semibold text-secondary-container">10:00 AM - 2:00 PM</span>
          </div>
        </div>
        {/* Links */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <h4 className="font-body text-xs font-bold text-[#462c78] tracking-widest uppercase">
            QUICK LINKS
          </h4>
          <nav className="flex flex-col gap-2 font-body text-sm text-slate-600">
            <a
              className="hover:text-[#462c78] hover:underline transition-all focus:ring-2 focus:ring-[#462c78]"
              href="#"
            >
              General Surgery
            </a>
            <a
              className="hover:text-[#462c78] hover:underline transition-all focus:ring-2 focus:ring-[#462c78]"
              href="#"
            >
              Surgical Oncology
            </a>
            <a
              className="hover:text-[#462c78] hover:underline transition-all focus:ring-2 focus:ring-[#462c78]"
              href="#"
            >
              Infertility
            </a>
            <a
              className="hover:text-[#462c78] hover:underline transition-all focus:ring-2 focus:ring-[#462c78]"
              href="#"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </ScrollReveal>
      <div className="w-full max-w-7xl border-t border-[#462c78]/10 pt-6 mt-4 text-center">
        <p className="font-body text-sm text-slate-700">
          &copy; 2024 Pallavi Sudhir Medicare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
