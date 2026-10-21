import React from 'react';

interface StatusPillProps {
  label: string;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({ label, className = '' }) => {
  return (
    <div className={`status-pill ${className}`}>
      <span className="status-dot" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
};
