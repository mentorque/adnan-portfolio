import SectionHeading from "@/components/ui/SectionHeading";
import SectionReveal from "@/components/ui/SectionReveal";
import { projects } from "@/config/site";

const Projects = () => (
  <section id="projects" className="section section--projects">
    <div className="container">
      <SectionHeading
        index="02"
        title="Projects"
        description="Applying rigorous analysis to generate insights for strategy and risk management."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <SectionReveal key={project.title} delay={index * 0.1}>
            <article className="panel project-card">
              {project.period && (
                <div className="project-top">
                  <span className="project-period">{project.period}</span>
                </div>
              )}
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
