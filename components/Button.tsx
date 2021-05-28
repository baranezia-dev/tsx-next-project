import Link from 'next/link';
import layout from '../styles/Layout.module.css';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = () => {
  return (
    <>
      <div className={layout.button}>
        <Link href="https://github.com/ilhambara?tab=repositories">
          <a>
            <p className={layout.projects__link}>More Projects on GitHub &rarr;</p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Button;
