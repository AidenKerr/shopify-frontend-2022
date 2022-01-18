import { ImageFeed } from '../ImageFeed';
import { useState } from 'react';
import { getPhotos } from './utils';

const RoverOptionPanel = ({ setImages }) => {
  const [sol, setSol] = useState(1);
  const [page, setPage] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPhotos(sol, page, setImages);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="sol">Sol: </label>
      <input
        id="sol"
        name="sol"
        type="text"
        defaultValue={1}
        required
        onChange={(e) => setSol(parseInt(e.target.value))}
      />
      <label htmlFor="page">Page: </label>
      <input
        id="page"
        name="page"
        type="text"
        defaultValue={1}
        required
        onChange={(e) => setPage(parseInt(e.target.value))}
      />
      <button type="submit">View Results</button>
    </form>
  );
};

export function RoverFeed() {
  const [images, setImages] = useState([]);

  return (
    <>
      <RoverOptionPanel setImages={setImages} />
      <ImageFeed images={images} />
    </>
  );
}
