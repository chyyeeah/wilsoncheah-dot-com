import Image from 'next/image';
import Header from '../src/components/Header.jsx';
import NavBar from '../src/components/NavBar.jsx';
import Footer from '../src/components/Footer.jsx';
import Portfolio from '../src/components/Portfolio/Portfolio.jsx';
import About from '../src/components/About.jsx';

export default function Main() {
  return (
    <div>
      <Header />
      <div className='max-w-screen-lg m-auto pl-6 pr-6 lg:pl-0 lg:pr-0'>
        <NavBar />
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-3'>
          <div className='text-center pt-3 pl-6 pb-6'>
            <About />
          </div>
          <div className='lg:col-span-3'>
            <Portfolio />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};