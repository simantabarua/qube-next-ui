import React from 'react';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const FutureSectionTitle: React.FC<FeatureSectionProps> = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col gap-4 px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        {title}
      </p>
      <h3 className=" text-4xl md:text-5xl font-semibold w-full md:max-w-2xl">{subtitle}</h3>
      <p className="text-secondary max-w-2xl">{description}</p>
    </div>
  );
};

export default FutureSectionTitle;