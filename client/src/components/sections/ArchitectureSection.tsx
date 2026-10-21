import React from 'react';
import { Server, Code, Sparkles } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="architecture-section" id="architecture">
      <div className="container">
        <div className="section-eyebrow">// SYSTEM PRINCIPLES</div>
        <h2 className="section-title">Engineering Focus & System Design</h2>

        <div className="cards-grid">
          {/* Pillar 1 */}
          <div className="arch-card">
            <div>
              <div className="node-icon-box" style={{ width: 44, height: 44, marginBottom: '1.25rem' }}>
                <Server size={22} />
              </div>
              <h3>Backend Architecture</h3>
              <p>
                Developing reliable enterprise backends with Java and Spring Boot. Prioritizing decoupled architectures, maintainable layered patterns, and production-ready REST conventions.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-lime)' }}>
                JAVA • SPRING BOOT • REST
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="arch-card">
            <div>
              <div className="node-icon-box" style={{ width: 44, height: 44, marginBottom: '1.25rem' }}>
                <Sparkles size={22} />
              </div>
              <h3>Generative AI Integration</h3>
              <p>
                Exploring modern Generative AI tooling, prompt orchestration, and intelligent system workflows that connect stateful backend services with machine learning APIs.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-lime)' }}>
                GEN AI • API ORCHESTRATION
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="arch-card">
            <div>
              <div className="node-icon-box" style={{ width: 44, height: 44, marginBottom: '1.25rem' }}>
                <Code size={22} />
              </div>
              <h3>Forward Deployed Mindset</h3>
              <p>
                Bridging backend engineering with client-side applications. Focusing on strict API contracts, rapid iteration, and direct business impact as an aspiring FDE.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-lime)' }}>
                FDE TRAJECTORY • VSSUT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
