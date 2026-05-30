import fs from "fs";
import path from "path";
import Link from "next/link";
import SkillsSection from "@/components/SkillsSection";
import { projects } from "@/lib/projects";
import { certifications } from "@/lib/certifications";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import HeroTitle from "@/components/HeroTitle";
import { socialLinks } from "@/lib/socialLinks";

export default function Home() {
  const certificateDir = path.join(process.cwd(), "public", "certificates");
  const certificateFiles = fs.existsSync(certificateDir)
    ? new Set(fs.readdirSync(certificateDir).map((file) => file.toLowerCase()))
    : new Set<string>();

  return (
    <>
    <main className="container">

      {/* HERO */}
      <section className="hero" id="hero">
        <Reveal className="hero-text" direction="up" delay={0}>
          <HeroTitle />
          <p>Software Engineer</p>
          <p style={{ color: "var(--secondary)", maxWidth: "400px" }}>
            I am Dharshini, a Computer Science student passionate about programming and web development. I enjoy creating projects that help me improve my technical skills and solve real-world problems. I am particularly interested in software development, modern web technologies, and continuously learning new tools that enhance creativity and problem-solving abilities.
          </p>
          <Link href="/resume" className="btn">View Resume</Link>
        </Reveal>
        <Reveal className="hero-image" direction="up" delay={120}>
          <div className="hero-photo-frame">
            <span className="hero-photo-halo" aria-hidden="true" />
            <span className="hero-photo-aura hero-photo-aura--1" aria-hidden="true" />
            <span className="hero-photo-aura hero-photo-aura--2" aria-hidden="true" />
            <img src="/profile.jpg" alt="Dharshini Prabhakaran" />
          </div>
        </Reveal>
      </section>
    <section className="education" id="education">

  <Reveal>
    <h2>Education</h2>
    <p className="subtitle">Academic background and qualifications</p>
  </Reveal>

  <div className="timeline">

    {/* COLLEGE */}
    <Reveal className="timeline-row" delay={0}>
      <div className="left">
        <div className="edu-card">
          <h3>M.Sc Software Systems</h3>
          <p><strong>Kongu Engineering College</strong></p>
          <p>2024 - 2029 | Perundurai, Tamil Nadu</p>

          <p>
            A comprehensive 5-year integrated master's program specializing in software systems with hands-on experience in full-stack development, AI/ML, and modern DevOps practices.
          </p>

          <div>
            <span className="badge">8.17 CGPA</span>
            <span className="badge">Current</span>
          </div>

          <ul>
            <li>AI/ML specialization</li>
            <li>Full stack development</li>
            <li>Strong DSA foundation</li>
          </ul>

          <div className="tags">
            <span>Data Structures</span>
            <span>Algorithms</span>
            <span>Machine Learning</span>
            <span>DevOps</span>
            <span>DBMS</span>
          </div>
        </div>
      </div>

      <div className="timeline-dot" aria-hidden="true" />
      <div className="right" />
    </Reveal>


    {/* CLASS XII */}
    <Reveal className="timeline-row" delay={120}>
      <div className="left" />

      <div className="timeline-dot" aria-hidden="true" />

      <div className="right">
        <div className="edu-card">
          <h3>Class XII (Higher Secondary)</h3>
          <p><strong>Vellalar Matriculation Higher Secondary School</strong></p>
          <p>2023 — 2024 | Thindal, Erode</p>

          <p>
            Science stream education with a focus on Mathematics and Computer Science, building a strong analytical and technical foundation for engineering.
          </p>

          <div>
            <span className="badge">85%</span>
            <span className="badge">Completed</span>
          </div>

          <ul>
            <li>Strong analytical foundation</li>
            <li>Focused science curriculum</li>
          </ul>

          <div className="tags">
            <span>Mathematics</span>
            <span>Physics</span>
            <span>Chemistry</span>
            <span>Computer Science</span>
          </div>
        </div>
      </div>
    </Reveal>


    {/* CLASS X */}
    <Reveal className="timeline-row" delay={240}>
      <div className="left">
        <div className="edu-card">
          <h3>Class X</h3>
          <p><strong>Vellalar Matriculation Higher Secondary School</strong></p>
          <p>2021 — 2022 | Thindal, Erode</p>

          <p>
            Strong academic foundation with balanced curriculum.
          </p>

          <div>
            <span className="badge">93%</span>
            <span className="badge">Completed</span>
          </div>

          <ul>
            <li>High performance</li>
            <li>Early computer exposure</li>
          </ul>

          <div className="tags">
            <span>Science</span>
            <span>Maths</span>
            <span>English</span>
            <span>Tamil</span>
          </div>
        </div>
      </div>

      <div className="timeline-dot" aria-hidden="true" />
      <div className="right" />
    </Reveal>

  </div>
</section>
<SkillsSection />
      <section className="projects" id="projects">

  {/* HEADER */}
  <Reveal className="projects-header">
    <h2>Projects</h2>
    <p>
      A collection of projects demonstrating my technical skills and practical experience.
    </p>
  </Reveal>

  <div className="projects-grid">
    {projects.map((project, index) => (
      <Reveal key={project.title} className="project-card" delay={index * 100}>
        <h3>{project.title}</h3>
        <span className="badge">{project.badge}</span>

        <div className="project-block">
          <p className="project-label">Problem</p>
          <p>{project.problem}</p>
        </div>

        <div className="project-block">
          <p className="project-label">Solution</p>
          <p>{project.solution}</p>
        </div>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </Reveal>
    ))}
  </div>

</section>
<section className="certifications" id="certifications">

  <Reveal className="cert-header">
    <h2>Certifications</h2>
    <p>Courses and certifications that enhance my technical knowledge.</p>
  </Reveal>

  <div className="cert-scroll">

      {certifications.map((cert, index) => {
        const fileExists = certificateFiles.has(cert.file.toLowerCase());
        return (
          <Reveal
            key={cert.file}
            className={`cert-card ${cert.highlight ? "cert-card-highlight" : ""}`}
            delay={index * 80}
          >
            <h3>{cert.title}</h3>
            <div className="cert-meta">
              <span className={cert.highlight ? "cert-tag highlight" : "cert-tag"}>{cert.source}</span>
              <span
                className={
                  cert.lifetimeValid ? "cert-validity cert-validity-lifetime" : "cert-validity cert-validity-limited"
                }
              >
                {cert.lifetimeValid ? "Lifetime Valid" : "Limited Validity"}
              </span>
            </div>
            <p>{cert.description}</p>
            {cert.highlight ? (
              <p className="cert-highlight-label">Global Certification</p>
            ) : null}
            {fileExists ? (
              <a href={`/certificates/${cert.file}`} className="cert-btn" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            ) : (
              <p className="cert-unavailable">Certificate unavailable</p>
            )}
          </Reveal>
        );
      })}

  </div>

</section>
<section className="contact" id="contact">
  <Reveal className="contact-header">
    <h2>Let&apos;s Connect</h2>
    <p className="subtitle">Reach out for collaborations, opportunities, or a friendly hello.</p>
  </Reveal>

  <Reveal className="contact-panel" delay={100}>
    <p className="contact-intro">
      I&apos;m a second-year Software Systems student exploring development, problem solving, and
      real-world projects. I&apos;m always open to learning, collaborations, and new opportunities.
    </p>

    <div className="contact-cards">
      <a
        href={`mailto:${socialLinks.email}`}
        className="contact-card"
        aria-label="Email Dharshini"
      >
        <span className="contact-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 5.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v13.5c0 .966-.784 1.75-1.75 1.75H3.25c-.966 0-1.75-.784-1.75-1.75V5.25Zm1.72 0 8.28 5.711 8.28-5.711H3.22Zm16.78 1.477-7.762 5.305a1.75 1.75 0 0 1-1.956 0L2.22 6.727V18.75h19.56V6.727Z"
            />
          </svg>
        </span>
        <span className="contact-card-label">Email</span>
        <span className="contact-card-value">{socialLinks.email}</span>
        <span className="contact-card-action">Send mail →</span>
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
        aria-label="LinkedIn profile"
      >
        <span className="contact-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452H16.89V14.74C16.89 13.427 16.865 11.764 14.987 11.764C13.086 11.764 12.815 13.175 12.815 14.643V20.452H9.256V9.5H12.667V10.917H12.714C13.186 10.072 14.31 9.182 15.995 9.182C19.62 9.182 20.448 11.343 20.448 14.095V20.452H20.447ZM5.337 8.086C3.844 8.086 2.642 6.86 2.642 5.345C2.642 3.831 3.844 2.603 5.337 2.603C6.813 2.603 8.014 3.831 8.014 5.345C8.014 6.86 6.813 8.086 5.337 8.086ZM7.119 20.452H3.554V9.5H7.119V20.452ZM22 2H2V22H22V2Z" />
          </svg>
        </span>
        <span className="contact-card-label">LinkedIn</span>
        <span className="contact-card-value">dharshini-prabhakaran</span>
        <span className="contact-card-action">View profile →</span>
      </a>

      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
        aria-label="GitHub profile"
      >
        <span className="contact-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.545 2.914 1.209.092-.937.349-1.546.636-1.902-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </span>
        <span className="contact-card-label">GitHub</span>
        <span className="contact-card-value">Dharsh-1622</span>
        <span className="contact-card-action">See repos →</span>
      </a>

      <div className="contact-card contact-card-static">
        <span className="contact-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </span>
        <span className="contact-card-label">Location</span>
        <span className="contact-card-value">Erode, Tamil Nadu</span>
        <span className="contact-card-action">India</span>
      </div>
    </div>

    <div className="contact-footer-note">
      <span className="contact-status" aria-hidden="true" />
      <p>Typically responds within 24–48 hours · Open to internships & project work</p>
    </div>
  </Reveal>
</section>

    </main>
    <Footer />
    </>
  );
}