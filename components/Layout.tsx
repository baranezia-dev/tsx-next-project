import Head from 'next/head';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <h1>Project Section</h1>
      </div>

      <div>{children}</div>

      <div>
        <p>Copyright 2021 - Project by Bara</p>
      </div>
    </div>
  );
};

export default Layout;
