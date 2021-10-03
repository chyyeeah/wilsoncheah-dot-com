import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../src/components/NavBar.jsx';
import Portfolio from '../src/components/Portfolio/Portfolio.jsx';
import Footer from '../src/components/Footer.jsx';

export default function Main() {
  return (
    <div>
      <Head>
        <title>Wilson Cheah</title>
        <meta name="description" content="Wilson Cheah's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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