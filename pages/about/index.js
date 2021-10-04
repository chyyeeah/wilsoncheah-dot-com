import Image from 'next/image';
import Header from '../../src/components/Header.jsx';
import NavBar from '../../src/components/NavBar.jsx';
import Footer from '../../src/components/Footer.jsx';

export default function About() {
  return (
    <div>
      <Header />
      <div className='max-w-screen-lg m-auto lg:pl-0 lg:pr-0'>
        <NavBar />
        <section>
          <h1 className="text-5xl pb-6 font-extralight">About</h1>
        </section>
      </div>
      <Footer />
    </div>
  )
};