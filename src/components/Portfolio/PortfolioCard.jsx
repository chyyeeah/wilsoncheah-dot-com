import React from 'react';
import Image from 'next/image';

const PortfolioCard = ({ title, description, tech, imagePath, github }) => {
  return (
    <a href={github} target='_blank' rel='noreferrer'>
      <div className='p-4 text-center border border-black rounded-lg border-opacity-25 shadow-md bg-white'>
        <div className='pt-2 pb-4'>
          <span className='text-3xl font-extralight'>{title}</span>
        </div>
        <div>
          <Image src={imagePath} alt={title} width={270} height={200} />
        </div>
        <p className='text-sm text-gray-500'>
          {tech.join(', ')}
        </p>
        <p className='pt-2 tracking-wide leading-6 text-md'>{description}</p>
      </div>
    </a>
  );
};

export default PortfolioCard;