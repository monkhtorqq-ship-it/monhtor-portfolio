import React from 'react';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return <h2 className="text-3xl font-bold text-center">{title}</h2>;
};

export default SectionTitle;