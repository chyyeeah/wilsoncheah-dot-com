import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className='grid grid-cols-4 lg:grid-cols-1'>
      <div className='col-start-1 col-end-3 md:col-start-2 md:col-end-3 lg:col-start-1 lg:col-end-1'>
        <Image
          className='rounded-full object-scale-down'
          src='/img/me.jpg'
          alt='Profile picture'
          width='250'
          height='250' />
      </div>
      <div className='col-start-3 col-end-5 self-center md:col-start-3 md:col-end-4 lg:col-start-1 lg:col-end-1 lg:self-auto'>
        <p className='text-4xl lg:text-2xl font-extralight lg:pt-3 pb-3'>Full Stack Engineer</p>
        <div>
          <Image src='/img/logo-react.svg' alt='React icon' width='75' height='75' />
          <Image src='/img/logo-nodejs.svg' alt='React icon' width='75' height='75' />
        </div>
      </div>
    </ div>
  );
};