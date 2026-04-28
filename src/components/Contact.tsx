import React from "react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section className="py-20 md:py-24 bg-surface-container-lowest border-t border-outline-variant/30" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-5xl text-primary font-semibold leading-tight">
                Get in Touch
              </h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-8 max-w-2xl">
                We are here to provide you with the best healthcare services. Reach out to us for
                any inquiries or to book an appointment.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Address</h4>
                  <p className="text-on-surface-variant font-body">
                    D.No 24-10-3, Ward No.1 DNR College Road, Srirampuram Bhimavaram, W.G. District
                    Andhra Pradesh - 534202
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Phone</h4>
                  <p className="text-on-surface-variant font-body">08816 22 3344</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <p className="text-on-surface-variant font-body">info@psmedicare</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delayMs={120} className="bg-primary-container rounded-2xl p-8 md:p-9 text-on-primary shadow-lg">
            <h3 className="font-headline text-2xl mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">schedule</span>
              Working Hours
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-on-primary/20 pb-4">
                <span className="font-body text-lg">Monday - Saturday</span>
                <span className="font-bold text-primary-fixed">24 Hours</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-body text-lg">Sunday</span>
                <span className="font-bold text-primary-fixed">10:00 AM - 2:00 PM</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-on-primary/20">
              <p className="font-body mb-4 text-primary-fixed-dim">Need immediate assistance?</p>
              <button className="w-full bg-on-primary text-primary-container font-bold py-3 rounded-lg hover:bg-surface transition-colors">
                Book Appointment Now
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
