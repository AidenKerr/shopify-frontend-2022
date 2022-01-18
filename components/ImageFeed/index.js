import { ImageCard } from '../ImageCard';

export function ImageFeed({ images }) {
  return (
    <div>
      {images.map((image) => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  );
}
