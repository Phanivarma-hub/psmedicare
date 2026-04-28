import React from "react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center bg-[#faf9fb] overflow-hidden pt-24 pb-12 md:pb-16">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#462c78]/5 -skew-x-12 transform translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ef3d75]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-14">
        {/* Content Side */}
        <div className="w-full lg:flex-1 space-y-7 md:space-y-8">
          <ScrollReveal className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#462c78]/10 border border-[#462c78]/20">
            <span className="w-2 h-2 rounded-full bg-[#ef3d75] animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider text-[#462c78] uppercase">Now Open in Bhimavaram</span>
          </ScrollReveal>
          
          <ScrollReveal delayMs={80}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#462c78] leading-[1.08]">
              A New <span className="text-[#ef3d75]">Milestone</span> in <br className="hidden md:block" /> Healthcare for Bhimavaram
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delayMs={140}>
            <p
              className="font-sans text-base md:text-lg text-slate-600 max-w-2xl w-full leading-8 whitespace-normal break-normal"
              style={{ writingMode: "horizontal-tb", textOrientation: "mixed" }}
            >
              Pallavi Sudhir&apos;s Medi Care Hospital proudly opens its doors to serve the people of Bhimavaram with advanced medical care, modern facilities, and compassionate service.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delayMs={220} className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="px-8 py-4 bg-[#462c78] text-white rounded-xl font-bold shadow-lg shadow-[#462c78]/20 hover:bg-[#35215b] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              <span>Book an Appointment</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="px-8 py-4 bg-white text-[#462c78] border-2 border-[#462c78]/10 rounded-xl font-bold hover:border-[#462c78]/30 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-xl text-[#ef3d75]">call</span>
              <span>08816 22 3344</span>
            </button>
          </ScrollReveal>
          
          {/* Trust Indicators */}
          <ScrollReveal delayMs={280}>
            <div className="flex items-center gap-6 pt-8 border-t border-slate-200">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100" alt="Doctor" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100" alt="Doctor" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                  +15
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#462c78]">Expert Medical Team</p>
                <p className="text-xs text-slate-500">24/7 Specialized Care Available</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Image Side */}
        <ScrollReveal delayMs={140} className="flex-1 relative">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-[#462c78]/20 border-8 border-white aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" alt="Modern Hospital Interior" className="w-full h-full object-cover" />
            
            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ef3d75] flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">emergency</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#462c78]">Emergency Ready</p>
                  <p className="text-xs text-slate-500">Advanced Trauma & Critical Care</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Background behind image */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ef3d75]/10 rounded-full blur-2xl z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#462c78]/10 rounded-full blur-3xl z-0"></div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
