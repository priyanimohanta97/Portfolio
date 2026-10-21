import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../../config/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="connect">
      <div className="container">
        <div className="footer-content">
          <div className="footer-meta">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <ShieldCheck size={16} color="var(--accent-lime)" aria-hidden="true" />
              <span>{PROFILE.name} • {PROFILE.education.degree} ({PROFILE.education.year})</span>
            </div>
            <div>{PROFILE.education.institution}</div>
            <div style={{ marginTop: '0.5rem', color: 'var(--text-dim)' }}>
              Target Role: <span style={{ color: 'var(--text-primary)' }}>{PROFILE.careerInterest}</span>
            </div>
          </div>

          <div className="footer-links">
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              LinkedIn <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle' }} aria-hidden="true" />
            </a>
            <span style={{ color: 'var(--border-medium)' }}>|</span>
            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              {PROFILE.systemMeta.version}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
