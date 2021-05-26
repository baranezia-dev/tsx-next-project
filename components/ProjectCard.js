import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function ProjectCard({ project }) {
  const { title, description, tags, slug, thumbnail } = project.fields;

  const { width, height } = thumbnail.fields.file.details.image;

  return (
    <>
      <div className={styles.card__elements}>
        <Link href={'/projects/' + slug}>
          <a className={styles.link}>
            <div className={styles.image}>
              <Image src={'https:' + thumbnail.fields.file.url} width={width} height={height} />
            </div>

            <div className={styles.description}>
              <h2>{title}</h2>

              <p>{description}</p>
            </div>

            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={tag} className={styles.hashtag}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
