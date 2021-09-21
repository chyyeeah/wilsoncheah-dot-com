import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar.jsx';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Wilson Cheah</title>
        <meta name="description" content="Wilson Cheah's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1>hi</h1>
    </div>
  )
};