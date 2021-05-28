import layout from '../styles/Layout.module.css';
import Footer from '../components/Footer';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={layout.container}>
        <main className={layout.main}>
          <div>{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
