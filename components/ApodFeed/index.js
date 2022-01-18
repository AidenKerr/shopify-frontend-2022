import { ImageFeed } from "../ImageFeed";
import { useState } from "react";
import { getPhotos } from "./utils";

const ApodOptionPanel = ({ setImages }) => {
  const [start, setStart] = useState("2022-01-03");
  const [end, setEnd] = useState("2022-01-16");

  const handleSubmit = (e) => {
    e.preventDefault();
    getPhotos(start, end, setImages);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="start">Start: </label>
      <input
        id="start"
        name="start"
        type="date"
        required
        onChange={(e) => setStart(e.target.value)}
        defaultValue={start}
        pattern="\d{4}-\d{2}-\d{2}"
      />
      <label htmlFor="page">End: </label>
      <input
        id="end"
        name="end"
        type="date"
        required
        onChange={(e) => setEnd(e.target.value)}
        defaultValue={end}
        pattern="\d{4}-\d{2}-\d{2}"
      />
      <button type="submit">View Results</button>
    </form>
  );
};

export function ApodFeed() {
  const [images, setImages] = useState([]);

  return (
    <>
      <ApodOptionPanel setImages={setImages} />
      <ImageFeed images={images} />
    </>
  );
}
