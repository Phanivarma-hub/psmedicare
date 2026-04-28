"use client";

import React from "react";
import { Activity, Microscope, Stethoscope, Venus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Component as MorphingCardStack } from "@/components/ui/morphing-card-stack";

const serviceCards = [
  {
    id: "surgery-general",
    title: "Surgery & General Care",
    description:
      "General surgery, advanced laparoscopy, laparoscopic thyroidectomy, and treatment for gall stones and appendix.",
    icon: <Stethoscope className="h-5 w-5" />,
    imageUrl:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "oncology",
    title: "Oncology",
    description:
      "Surgical and medical oncology, HIPEC, breast oncoplasty, and multidisciplinary cancer care with palliative pain support.",
    icon: <Microscope className="h-5 w-5" />,
    imageUrl:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gynaecology-ivf",
    title: "Gynaecology & IVF",
    description:
      "Infertility treatment including IVF/ICSI/IUI, PCOD and fibroid management, hysteroscopy, ovulation induction, and male infertility care.",
    icon: <Venus className="h-5 w-5" />,
    imageUrl:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "critical-support",
    title: "Integrated Follow-up",
    description:
      "Post-operative recovery plans, long-term wellness tracking, and coordinated specialist follow-up for continuity of care.",
    icon: <Activity className="h-5 w-5" />,
    imageUrl:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
];

const Services = () => {
  return (
    <section
      className="border-t border-outline-variant/30 bg-surface-container-lowest py-20 md:py-24"
      id="services"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-14 space-y-4 text-center md:mb-16">
          <h2 className="font-headline text-3xl leading-tight font-semibold text-primary md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-3xl font-body text-base leading-8 text-on-surface-variant md:text-lg">
            Explore our specialties in an interactive layout. Switch between stack, grid, and list
            views to quickly understand the care areas we offer.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={80}>
          <div className="rounded-2xl border border-outline-variant/40 bg-surface p-4 sm:p-6 md:p-8">
            <MorphingCardStack cards={serviceCards} defaultLayout="grid" className="mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
