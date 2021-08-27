import layout from '../styles/Layout.module.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className={layout.footer}>
        <div className={layout.footer__element}>
          <p>
            Made using{' '}
            <span className={layout.text__span}>
              <a href="https://nextjs.org/" target="_blank" rel="noopener">
                Next.js
              </a>
            </span>{' '}
            and{' '}
            <span className={layout.text__span}>
              <a href="https://www.contentful.com/" target="_blank" rel="noopener">
                Contentful
              </a>
            </span>
            . Hosted on{' '}
            <span className={layout.text__span}>
              <a href="https://vercel.com/" target="_blank" rel="noopener">
                Vercel
              </a>
            </span>
            .
          </p>
          <p>
            Licensed on{' '}
            <span className={layout.text__span}>
              <a href="https://github.com/ilhambara/tsc-next-project/blob/main/LICENSE">MIT License</a>.
            </span>{' '}
          </p>
        </div>
        <div className={layout.footer__element}>
          <p>
            © 2021—present{' '}
            <span className={layout.text__span}>
              <a href="https://github.com/ilhambara" target="_blank" rel="noopener">
                Ilham Bara
              </a>
              .
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
