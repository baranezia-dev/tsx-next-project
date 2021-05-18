import Head from 'next/head';
import layout from '../styles/Layout.module.css';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={layout.container}>
      <main className={layout.main}>
        <header>
          <h1 className={layout.title}>Project Section</h1>
        </header>

        <div>{children}</div>

        <footer className={layout.footer}>
          <p>Copyright 2021 - This Project</p>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
