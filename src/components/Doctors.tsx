import ScrollReveal from "./ScrollReveal";
import TeamMemberCard from "./ui/team-member-card";

const Doctors = () => {
  const doctors = [
    {
      firstName: "Dr. Sudhir",
      lastName: "Nadimpalli",
      jobPosition: "General & Laparoscopic Surgery",
      description:
        "MBBS, MS (General & Laparoscopic Surgery), M.Ch Surgical Oncology. Specializes in minimally invasive procedures and evidence-based surgical oncology care.",
      imageUrl: "/images/sudhir.jpeg",
      position: "left" as const,
    },
    {
      firstName: "Dr. Pallavi",
      lastName: "Jampana",
      jobPosition: "Reproductive Medicine (IVF) & OBGY",
      description:
        "MBBS, MS (OBGY) - KMC Manipal, DNB, MRCOG (UK), FRM - Milann Bangalore. Focused on personalized fertility pathways and comprehensive women's healthcare.",
      imageUrl: "/images/jampana.jpeg",
      position: "right" as const,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-surface-bright border-t border-outline-variant/30" id="doctors">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14 md:mb-16 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl text-primary font-semibold leading-tight">
            Our Expert Doctors
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-8">
            Meet our highly qualified and experienced medical professionals.
          </p>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto">
          {doctors.map((doctor, index) => (
            <ScrollReveal key={index} delayMs={index * 100}>
              <TeamMemberCard
                position={doctor.position}
                firstName={doctor.firstName}
                lastName={doctor.lastName}
                jobPosition={doctor.jobPosition}
                description={doctor.description}
                imageUrl={doctor.imageUrl}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
