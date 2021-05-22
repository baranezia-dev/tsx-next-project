import Link from 'next/link';

export default function ProjectCard({ project }) {
  const { title, description, slug } = project.fields;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={'/projects/' + slug}>
        <a>See the project</a>
      </Link>
    </div>
  );
}
