import Image from 'next/image';
import Header from '../src/components/Header.jsx';
import NavBar from '../src/components/NavBar.jsx';
import Footer from '../src/components/Footer.jsx';
import Portfolio from '../src/components/Portfolio/Portfolio.jsx';

export default function Main() {
  return (
    <div>
      <Header />
      <div className='max-w-screen-lg m-auto lg:pl-0 lg:pr-0'>
        <NavBar />
        <section>
          <h1 className="text-5xl pb-6 font-extralight">Portfolio</h1>
          <Portfolio />
        </section>
      </div>
      <Footer />
    </div>
  )
};