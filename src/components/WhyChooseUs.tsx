import React from "react";
import ScrollReveal from "./ScrollReveal";

const WhyChooseUs = () => {
  const cards = [
    {
      icon: 'medical_services',
      title: 'Advanced Medical Care',
      description: 'Utilizing the latest protocols and evidence-based treatments to ensure optimal patient outcomes.',
      color: '#462c78',
    },
    {
      icon: 'business',
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure designed to offer a safe, sterile, and comfortable environment.',
      color: '#ef3d75',
    },
    {
      icon: 'favorite',
      title: 'Compassionate Service',
      description: 'We treat every patient as family, offering empathetic care and support throughout their journey.',
      color: '#462c78',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#462c78" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-14 md:mb-16 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-[#ef3d75]/10 text-[#ef3d75] text-sm font-bold tracking-wider uppercase mb-2">
            Our Excellence
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#462c78] font-bold leading-tight">
            Why Choose Our <span className="text-[#ef3d75]">Expertise</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-8">
            Committed to providing world-class healthcare with a personal touch in Bhimavaram.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ScrollReveal key={index} delayMs={index * 90}>
              <div className="group relative bg-white p-8 md:p-9 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#462c78]/10 hover:-translate-y-2 transition-all duration-500 flex h-full flex-col items-center text-center overflow-hidden">
                {/* Card Hover Background Decor */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#462c78]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                
                <div 
                  className="w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 group-hover:rotate-6 shadow-lg"
                  style={{ background: index === 1 ? "linear-gradient(135deg, #ef3d75, #f36e98)" : "linear-gradient(135deg, #462c78, #8872ab)" }}
                >
                  <span
                    className="material-symbols-outlined text-4xl text-white"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {card.icon}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl text-[#462c78] font-bold mb-3 relative z-10 leading-tight">
                  {card.title}
                </h3>
                
                <p className="font-sans text-slate-600 leading-7 relative z-10">
                  {card.description}
                </p>
                
                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: index === 1 ? "#ef3d75" : "#462c78" }}
                ></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
