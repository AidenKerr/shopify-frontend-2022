import Image from "next/image";
import styles from "./ImageCard.module.css";
import { LikeButton } from "../LikeButton";

const getDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export function ImageCard({ image }) {
  if (!image) return null; // todo change to loading cards

  const { src, id, title, by, date, alt } = image || {};

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image width={300} height={300} objectFit="cover" src={src} alt={alt} />
      </div>
      <div className={styles.info}>
        <LikeButton id={id} />
        <div>
          <h4>{title}</h4>
          <h5>By {by}</h5>
          <p>
            <time dateTime={date}>{getDate(date)}</time>
          </p>
        </div>
      </div>
    </div>
  );
}
