import Image from "next/image";
import styles from "./ImageCard.module.css";

export function ImageCard({ photo }) {
  if (!photo) return null; // todo change to loading cards
  console.log(photo);
  const { img_src, rover, earth_date } = photo || {};
  const { name } = rover || {};

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image width={300} height={300} src={img_src} />
      </div>
      <p>By {name} </p>
      <time dateTime={earth_date}>{earth_date}</time>
    </div>
  );
}
