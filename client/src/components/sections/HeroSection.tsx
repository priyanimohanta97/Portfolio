import React from 'react';
import { ArrowUpRight, Cpu, Database, Network, Sparkles, Layers } from 'lucide-react';
import { PROFILE } from '../../config/profile';
import { StatusPill } from '../ui/StatusPill';
import { MetricTag } from '../ui/MetricTag';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" id="overview">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Asymmetric Editorial Profile */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <StatusPill label={PROFILE.status} />
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                VSSUT_BURLA
              </span>
            </div>

            <h1 className="hero-title">
              Engineering robust <span className="accent">backend systems</span> & API architectures.
            </h1>

            <p className="hero-subtitle">
              I'm <strong style={{ color: 'var(--text-primary)' }}>{PROFILE.name}</strong>, a first-year B.Tech student at Veer Surendra Sai University of Technology (VSSUT), Burla. Focused on building scalable Java and Spring Boot backends, strict REST APIs, and exploring Generative AI capabilities with an orientation toward <strong style={{ color: 'var(--accent-lime)' }}>Forward Deployed Engineering (FDE)</strong>.
            </p>

            <div className="hero-cta-group">
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="#architecture" className="btn btn-secondary">
                <span>View Architecture</span>
              </a>
            </div>

            <div className="hero-focus-block" id="focus">
              <div className="focus-heading">Core Technical Focus</div>
              <div className="focus-tags">
                <MetricTag label="Java" icon={<Cpu size={14} color="var(--accent-lime)" />} />
                <MetricTag label="Spring Boot" icon={<Layers size={14} color="var(--accent-lime)" />} />
                <MetricTag label="REST APIs" icon={<Network size={14} color="var(--accent-lime)" />} />
                <MetricTag label="Generative AI" icon={<Sparkles size={14} color="var(--accent-lime)" />} />
              </div>
            </div>
          </div>

          {/* Right Column: Custom Technical Visual & Architecture Diagram */}
          <div className="hero-visual" aria-label="System Architecture Visual Representation">
            <div className="technical-canvas">
              <div className="canvas-header">
                <div className="canvas-dots" aria-hidden="true">
                  <div className="canvas-dot" style={{ backgroundColor: '#ef4444' }} />
                  <div className="canvas-dot" style={{ backgroundColor: '#eab308' }} />
                  <div className="canvas-dot" style={{ backgroundColor: '#22c55e' }} />
                </div>
                <div>PIPELINE_SCHEMATIC // FDE_WORKFLOW</div>
              </div>

              <div className="arch-node-list">
                {/* Node 1: Client Layer */}
                <div className="arch-node">
                  <div className="node-meta">
                    <div className="node-icon-box">
                      <Network size={18} />
                    </div>
                    <div className="node-info">
                      <h4>Client Interface Layer</h4>
                      <p>React • TypeScript • Strict Contracts</p>
                    </div>
                  </div>
                  <div className="node-status">
                    <div>PORT: 3000</div>
                    <div className="latency">HTTP/2</div>
                  </div>
                </div>

                {/* Node 2: Core Spring Boot Service (Active) */}
                <div className="arch-node active-node">
                  <div className="node-meta">
                    <div className="node-icon-box">
                      <Cpu size={18} />
                    </div>
                    <div className="node-info">
                      <h4>Spring Boot Core Service</h4>
                      <p>Java 21 • REST Endpoints • Validation</p>
                    </div>
                  </div>
                  <div className="node-status">
                    <div>STATUS: ACTIVE</div>
                    <div className="latency">&lt; 15ms</div>
                  </div>
                </div>

                {/* Node 3: AI / Model Integration */}
                <div className="arch-node">
                  <div className="node-meta">
                    <div className="node-icon-box">
                      <Sparkles size={18} />
                    </div>
                    <div className="node-info">
                      <h4>Generative AI Engine</h4>
                      <p>Prompt Pipelines • LLM Integrations</p>
                    </div>
                  </div>
                  <div className="node-status">
                    <div>STREAM: READY</div>
                    <div className="latency">ASYNC</div>
                  </div>
                </div>

                {/* Node 4: Persistence Contract */}
                <div className="arch-node">
                  <div className="node-meta">
                    <div className="node-icon-box">
                      <Database size={18} />
                    </div>
                    <div className="node-info">
                      <h4>Persistence Contract</h4>
                      <p>Spring Data JPA • PostgreSQL Target</p>
                    </div>
                  </div>
                  <div className="node-status">
                    <div>SCHEMA: STRICT</div>
                    <div className="latency">POOLED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
