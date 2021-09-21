import Link from 'next/Link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/portfolio'>
          <a>Portfolio</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;