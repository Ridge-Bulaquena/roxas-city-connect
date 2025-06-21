import React from 'react';

const MarqueeBanner: React.FC = () => {
  const headlines = ['Headline 1', 'Headline 2', 'Headline 3'];

  return (
    <div className="marquee-banner">
      {headlines.map((headline, index) => (
        <div key={index} className="marquee-banner__item">
          {headline}
        </div>
      ))}
    </div>
  );
};

export default MarqueeBanner; 