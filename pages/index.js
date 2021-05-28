import Head from 'next/head';
import { createClient } from 'contentful';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_API,
  });

  const res = await client.getEntries({ content_type: 'project' });

  // any objects added are passing as a props called 'projects'
  return {
    props: { projects: res.items },
    revalidate: 1, // in seconds for page re-generation
  };
}

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects | Next Portfolio</title>
        <meta name="description" content="Separate project section for Ilham Bara's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </div>

      <Button />
    </>
  );
}
