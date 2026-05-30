'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section className="skills" id="skills">
      {/* HEADER */}
      <Reveal className="skills-header">
        <h2>Skills</h2>
        <p className="subtitle">
          Skills and tools I use to build efficient and scalable applications.
        </p>
      </Reveal>

      {/* TAB BUTTONS */}
      <Reveal className="skills-tabs" delay={80}>
        <button 
          className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
          onClick={() => setActiveTab('technical')}
        >
          Technical Skills
        </button>
        <button 
          className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          Tools
        </button>
        <button 
          className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
          onClick={() => setActiveTab('soft')}
        >
          Soft Skills
        </button>
      </Reveal>

      {/* TAB CONTENT */}
      <Reveal className="tab-content" delay={160}>
        
        {/* TECHNICAL SKILLS TAB */}
        {activeTab === 'technical' && (
          <div className="tab-pane fade-in">
            <p className="tab-description">Implemented in course projects and personal apps. I use these tools daily in real projects, including full-stack applications.</p>
            
            <div className="skills-grid-responsive">
              <div className="skill-item">
                <span className="skill-icon">🐍</span>
                <span className="skill-title">Python</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">📜</span>
                <span className="skill-title">JavaScript</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">⚛️</span>
                <span className="skill-title">React</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🟢</span>
                <span className="skill-title">Node.js</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🎨</span>
                <span className="skill-title">Tailwind CSS</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🌐</span>
                <span className="skill-title">HTML & CSS</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">💾</span>
                <span className="skill-title">SQL</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🍃</span>
                <span className="skill-title">MongoDB</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">☕</span>
                <span className="skill-title">Java</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🔌</span>
                <span className="skill-title">REST APIs</span>
              </div>
            </div>
          </div>
        )}

        {/* TOOLS TAB */}
        {activeTab === 'tools' && (
          <div className="tab-pane fade-in">
            <p className="tab-description">Tools I use to move ideas to production and streamline development workflow.</p>
            
            <div className="tools-list">
              <div className="tool-item">
                <span className="tool-icon">💻</span>
                <div className="tool-info">
                  <h4>VS Code</h4>
                  <p>Primary code editor for development</p>
                </div>
              </div>
              <div className="tool-item">
                <span className="tool-icon">📁</span>
                <div className="tool-info">
                  <h4>Git + GitHub</h4>
                  <p>Version control and repository management</p>
                </div>
              </div>
              <div className="tool-item">
                <span className="tool-icon">🎨</span>
                <div className="tool-info">
                  <h4>Figma</h4>
                  <p>UI/UX design and prototyping</p>
                </div>
              </div>
              <div className="tool-item highlight">
                <span className="tool-icon">✏️</span>
                <div className="tool-info">
                  <h4>Canva</h4>
                  <p>Graphic design and visual content creation</p>
                </div>
              </div>
              <div className="tool-item">
                <span className="tool-icon">📦</span>
                <div className="tool-info">
                  <h4>Postman</h4>
                  <p>API testing and development</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SOFT SKILLS TAB */}
        {activeTab === 'soft' && (
          <div className="tab-pane fade-in">
            <p className="tab-description">Professional competencies that drive effective collaboration and problem-solving.</p>
            
            <div className="soft-skills-grid">
              <div className="soft-skill-card">
                <div className="soft-skill-number">01</div>
                <h4>Communication</h4>
                <p>I share progress clearly and communicate ideas effectively with team members and stakeholders.</p>
              </div>
              <div className="soft-skill-card">
                <div className="soft-skill-number">02</div>
                <h4>Problem Solving</h4>
                <p>I break down complex problems into manageable steps and find creative solutions efficiently.</p>
              </div>
              <div className="soft-skill-card">
                <div className="soft-skill-number">03</div>
                <h4>Adaptability</h4>
                <p>I learn new tools and technologies quickly and thrive in dynamic environments.</p>
              </div>
              <div className="soft-skill-card">
                <div className="soft-skill-number">04</div>
                <h4>Time Management</h4>
                <p>I organize workflows efficiently to meet deadlines and maintain high-quality deliverables.</p>
              </div>
            </div>
          </div>
        )}

      </Reveal>
    </section>
  );
}
