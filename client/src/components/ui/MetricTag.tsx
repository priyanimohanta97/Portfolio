import React from 'react';

interface MetricTagProps {
  label: string;
  icon?: React.ReactNode;
}

export const MetricTag: React.FC<MetricTagProps> = ({ label, icon }) => {
  return (
    <span className="metric-tag">
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{label}</span>
    </span>
  );
};
