import Link from "next/link";
import PrintResumeButton from "@/components/PrintResumeButton";
import { projects } from "@/lib/projects";
import { socialLinks } from "@/lib/socialLinks";

const certifications = [
  "Advanced C Programming",
  "Mobile App Development",
  "Social Network Analysis (NPTEL)",
  "Flutter Development",
  "DSA in Python",
  "Industry 4.0 & IIoT",
  "Oracle Global Certification",
];

export default function Resume() {
  return (
    <main className="resume-wrapper">
      <div className="resume-toolbar no-print">
        <Link href="/" className="btn btn-outline">
          Back to Portfolio
        </Link>
        <PrintResumeButton />
      </div>

      <article className="resume-sheet" aria-label="Resume of Dharshini Prabhakaran">
        <header className="resume-sheet-header">
          <div className="resume-sheet-intro">
            <h1>Dharshini Prabhakaran</h1>
            <p className="resume-sheet-tagline">Software Engineer · M.Sc Software Systems Student</p>
            <ul className="resume-sheet-contact">
              <li>
                <a href={`mailto:${socialLinks.email}`}>{socialLinks.email}</a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  {socialLinks.linkedin.replace("https://www.", "")}
                </a>
              </li>
              <li>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  {socialLinks.github.replace("https://", "")}
                </a>
              </li>
              <li>Erode, Tamil Nadu</li>
            </ul>
          </div>
        </header>

        <div className="resume-sheet-body">
          <aside className="resume-sheet-sidebar">
            <section>
              <h2>Technical Skills</h2>
              <ul>
                <li>Python · Java · JavaScript</li>
                <li>React · Node.js · Tailwind CSS</li>
                <li>HTML · CSS · SQL · MongoDB</li>
                <li>REST APIs · Flutter · Firebase</li>
              </ul>
            </section>

            <section>
              <h2>Tools</h2>
              <ul>
                <li>VS Code · Git · GitHub</li>
                <li>Figma · Canva · Postman</li>
              </ul>
            </section>

            <section>
              <h2>Certifications</h2>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Strengths</h2>
              <ul>
                <li>Quick learner</li>
                <li>Problem solving</li>
                <li>Team collaboration</li>
                <li>Time management</li>
              </ul>
            </section>

            <section>
              <h2>Languages</h2>
              <ul>
                <li>Tamil · English</li>
              </ul>
            </section>
          </aside>

          <div className="resume-sheet-main">
            <section>
              <h2>Career Objective</h2>
              <p>
                Motivated and enthusiastic student seeking opportunities to apply programming, web
                development, and problem-solving skills in a professional environment while gaining
                practical experience and contributing to organizational growth.
              </p>
            </section>

            <section>
              <h2>Education</h2>
              <div className="resume-sheet-entry">
                <div className="resume-sheet-entry-head">
                  <h3>M.Sc Software Systems</h3>
                  <span>8.17 CGPA (2024 – 2029)</span>
                </div>
                <p className="resume-sheet-sub">Kongu Engineering College · Perundurai, Tamil Nadu</p>
                <p>
                  Integrated master&apos;s in software systems with hands-on experience in full-stack
                  development, AI/ML, and DevOps.
                </p>
              </div>
              <div className="resume-sheet-entry">
                <div className="resume-sheet-entry-head">
                  <h3>Class XII (Higher Secondary)</h3>
                  <span>85% (2023 – 2024)</span>
                </div>
                <p className="resume-sheet-sub">Vellalar Matriculation Higher Secondary School · Thindal, Erode</p>
                <p>Science stream with focus on Mathematics and Computer Science.</p>
              </div>
              <div className="resume-sheet-entry">
                <div className="resume-sheet-entry-head">
                  <h3>Class X</h3>
                  <span>93% (2021 – 2022)</span>
                </div>
                <p className="resume-sheet-sub">Vellalar Matriculation Higher Secondary School · Thindal, Erode</p>
                <p>Strong foundation in science and mathematics.</p>
              </div>
            </section>

            <section>
              <h2>Projects</h2>
              {projects.map((project) => (
                <div key={project.title} className="resume-sheet-entry">
                  <div className="resume-sheet-entry-head">
                    <h3>{project.title}</h3>
                  </div>
                  <p className="resume-sheet-tech">{project.tech}</p>
                  <div className="resume-sheet-project-block">
                    <p className="resume-sheet-label">Problem</p>
                    <p>{project.problem}</p>
                  </div>
                  <div className="resume-sheet-project-block">
                    <p className="resume-sheet-label">Solution</p>
                    <p>{project.solution}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
