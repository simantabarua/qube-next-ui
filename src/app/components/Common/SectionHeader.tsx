import React, { FC } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-sm font-semibold tracking-widest uppercase text-primary">{title}</p>
      <h2 className="text-4xl md:text-6xl font-bold">{subtitle}</h2>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

export default SectionHeader;
