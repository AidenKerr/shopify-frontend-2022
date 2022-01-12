import Image from "next/image";
import styles from "./ImageCard.module.css";

const getDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = {year: 'numeric', month: 'long', day: 'numeric'}
  return date.toLocaleDateString('en-US', options);
}

export function ImageCard({ photo }) {
  if (!photo) return null; // todo change to loading cards

  console.log(photo);
  const { img_src, rover, earth_date, camera } = photo || {};
  const { name } = rover || {};
  const { full_name } = camera || {};

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image width={300} height={300} src={img_src} />
      </div>
      <h4>{full_name}</h4>
      <h5>By {name}</h5>
      <p><time dateTime={earth_date}>{getDate(earth_date)}</time></p>
    </div>
  );
}
