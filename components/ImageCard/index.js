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

  const { id, img_src, rover, earth_date, camera } = image || {};
  const { name } = rover || {};
  const { full_name } = camera || {};

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          width={300}
          height={300}
          objectFit="cover"
          src={img_src}
          alt={`Martian surface taken by the ${full_name} on ${name}`}
        />
      </div>
      <div className={styles.info}>
        <LikeButton id={id} />
        <div>
          <h4>{full_name}</h4>
          <h5>By {name}</h5>
          <p>
            <time dateTime={earth_date}>{getDate(earth_date)}</time>
          </p>
        </div>
      </div>
    </div>
  );
}
