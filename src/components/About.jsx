import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Image
        className='rounded-full'
        src='/img/me.jpg'
        alt='Profile picture'
        width='250'
        height='250' />
      <p className='text-4xl font-extralight pt-3 pb-3'>Full Stack Engineer</p>
      <div>
        <Image src='/img/logo-react.svg' alt='React icon' width='75' height='75' />
        <Image src='/img/logo-nodejs.svg' alt='React icon' width='75' height='75' />
      </div>
    </>
  );
};