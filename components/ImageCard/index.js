import Image from 'next/image';
import styles from './ImageCard.module.css';
import { LikeButton } from '../LikeButton';

const getDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export function ImageCard({ image }) {
  const { src, id, title, by, date, alt } = image || {};

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          width={300}
          height={300}
          objectFit="cover"
          src={src}
          alt={alt}
          tabIndex={0}
        />
      </div>
      <div className={styles.info}>
        <LikeButton id={id} />
        <div>
          <p
            className={styles.title}
            tabIndex={0}
            aria-label={`title: ${title}`}
          >
            {title}
          </p>
          <p className={styles.author} tabIndex={0}>
            By {by}
          </p>
          <p>
            <time dateTime={date} tabIndex={0}>
              {getDate(date)}
            </time>
          </p>
        </div>
      </div>
    </div>
  );
}
