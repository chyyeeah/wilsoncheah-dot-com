import React from 'react';
import projects from '../../data/projects';
import PortfolioCard from './PortfolioCard.jsx';

const Portfolio = () => {
  // items-stretch
  return (
    <div className='grid grid-cols-3 gap-6 pr-6 pl-6'>
      {
        projects.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))
      }
    </div>
  );
};

export default Portfolio;