import Link from 'next/Link';

const NavBar = () => {
  return (
    <>
      <nav className='pt-10 pb-12'>
        <div className='flex justify-center'>
          <Link href='/'>
            <a className='text-6xl font-extralight tracking-tight'>Wilson Cheah</a>
          </Link>
          <div className='flex-grow'></div>
          <div className='flex pl-6 flex items-center w-auto'>
            <Link href='/about'>
              <a className='block inline-block text-teal-200 hover:text-white mr-6'>About</a>
            </Link>
            <a className='block inline-block text-teal-200 hover:text-white mr-6'>LinkedIn</a>
            <a className='block inline-block text-teal-200 hover:text-white mr-6'>GitHub</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;