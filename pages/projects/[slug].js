import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../../styles/Slug.module.css';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_API,
});

// generate static page for each data from slug
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'project',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// fetch single items based on the page we're on and inject it as a prop
export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'project',
    'fields.slug': params.slug, // match the items we want
  });

  // pass the single items object
  return {
    props: { project: items[0] },
  };
};

export default function ProjectDetails({ project }) {
  const { title, description, tags, slug, thumbnail, details } = project.fields;

  const { width, height } = thumbnail.fields.file.details.image;

  return (
    <>
      <div className={styles.banner}>
        <Image src={'https:' + thumbnail.fields.file.url} width={width} height={height} />
      </div>
      <div className={styles.content}>
        <h2>{project.fields.title}</h2>

        {tags.map((tag) => (
          <span key={tag} className={styles.hashtag}>
            {tag}
          </span>
        ))}
        <hr />
      </div>

      <div>{documentToReactComponents(details)}</div>
    </>
  );
}
