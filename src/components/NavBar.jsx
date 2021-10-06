import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <nav className='pt-10 pb-4 mb-8 border-b border-gray-400'>
        <div className='flex justify-center ml-6 mr-6'>
          <Link href='/'>
            <a className='text-5xl font-extralight tracking-tight'>Wilson Cheah</a>
          </Link>
          <div className='flex-grow'></div>
          <div className='flex pl-6 flex items-center w-auto'>
            <a href='https://www.linkedin.com/feed/' target='_blank' rel='noreferrer' className='block inline-block text-teal-200 mr-3'>
              <Image src='/img/logo-linkedin.svg' alt='LinkedIn logo' width='30' height='30'>
              </Image>
            </a>
            <a href='https://github.com/chyyeeah' target='_blank' rel='noreferrer' className='block inline-block text-teal-200'>
              <Image src='/img/logo-github.svg' alt='LinkedIn logo' width='30' height='30'>
              </Image>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;