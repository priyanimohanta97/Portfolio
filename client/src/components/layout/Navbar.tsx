import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { PROFILE } from '../../config/profile';
import { StatusPill } from '../ui/StatusPill';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#overview" className="nav-brand" aria-label={`${PROFILE.name} Portfolio Home`}>
            <Terminal size={20} color="var(--accent-lime)" aria-hidden="true" />
            <span className="brand-mono">
              priyani<span className="highlight">.mohanta</span>
            </span>
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {PROFILE.navigation.map((item) => (
                <li key={item.label} className="nav-item">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <StatusPill label="SYS_ONLINE" className="hidden-mobile" />
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.45rem 0.875rem', fontSize: '0.8125rem' }}
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <span>LinkedIn</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
