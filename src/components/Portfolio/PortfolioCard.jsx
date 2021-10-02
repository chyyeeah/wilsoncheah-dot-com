import React from 'react';
import Image from 'next/image';

const PortfolioCard = ({ title, description, tech, imagePath }) => {
  return (
    <div className='p-3 text-center border border-black rounded-md border-opacity-25 shadow-md '>
      <div className='pb-2'>
        <span className='text-3xl font-extralight'>{title}</span>
      </div>
      <div>
        <Image src={imagePath} alt={title} width={270} height={200} />
      </div>
      <p className='text-sm text-gray-500'>
        {tech.join(', ')}
      </p>
      <p className='pt-2 tracking-wide leading-6'>{description}</p>
    </div>
  );
};

export default PortfolioCard;