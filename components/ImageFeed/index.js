import { ImageCard } from "../ImageCard";

export function ImageFeed({ images }) {
  const pageMax = 25;
  return (
    <div>
      {[...Array(pageMax).keys()].map((n) => (
        <ImageCard image={images[n]} key={n} />
      ))}
    </div>
  );
}
