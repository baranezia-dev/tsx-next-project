import { createClient } from 'contentful';

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
  console.log(project);

  return (
    <>
      <h2>{project.fields.title}</h2>
    </>
  );
}
