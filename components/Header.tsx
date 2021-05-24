import Head from 'next/head';
import layout from '../styles/Layout.module.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <header>
        <h1 className={layout.title}>
          Project <span>Showcase</span>
        </h1>
      </header>
    </>
  );
};

export default Header;
