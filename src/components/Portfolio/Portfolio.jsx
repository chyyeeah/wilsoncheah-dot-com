import React from 'react';
import projects from '../../data/projects';
import PortfolioCard from './PortfolioCard.jsx';

const Portfolio = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 md:pl-36 md:pr-36 lg:grid-cols-2 lg:gap-6 lg:pr-6 lg:pl-6'>
        {
          projects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))
        }
      </div>
    </>
  );
};

export default Portfolio;