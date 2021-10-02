import React from 'react';
import Image from 'next/image';

const PortfolioCard = ({ title, description, tech, imagePath }) => {
  return (
    <div className='pt-3 pb-3 text-center border-2 border-black rounded-md border-opacity-25 shadow-md'>
      <div className='pb-2'>
        <span className='text-3xl font-extralight'>{title}</span>
      </div>
      <div className='pl-3 pr-3'>
        <Image src={imagePath} alt={title} width={270} height={200} />
      </div>
      <p className='pl-3 pr-3'>{description}</p>
      <ul className='list-disc list-inside'>
        {
          tech.map((e, i) => <li key={i}>{e}</li>)
        }
      </ul>
    </div>
  );
};

export default PortfolioCard;