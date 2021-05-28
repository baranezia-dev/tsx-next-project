import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="lost">
      <h2>
        Looks like you've lost! Redirecting back to the <a href="/">home page</a> . . .
      </h2>
      <Image src="https://http.cat/404" width="600" height="450" />

      <style jsx>{`
        .lost {
          text-align: center;
          margin: 0 1rem;
        }

        .lost h2 {
          font-weight: 400;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .lost a {
          color: #1da1f2;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
