import { Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionReveal from "@/components/ui/SectionReveal";
import { certificates } from "@/config/site";

const Certificates = () => (
  <section id="certificates" className="section section--certificates">
    <div className="container">
      <SectionHeading
        index="05"
        title="Certificates"
        description="Professional certifications and programmes supporting continuous learning."
      />

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <SectionReveal key={cert.id} delay={index * 0.06}>
            <article className="panel certificate-card">
              <div className="certificate-icon" aria-hidden="true">
                <Award size={20} />
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
