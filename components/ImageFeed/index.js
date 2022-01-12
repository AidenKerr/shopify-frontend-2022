import { useEffect, useState } from "react";
import { ImageCard } from "../ImageCard";

export function ImageFeed() {
  const [photos, setPhotos] = useState({});

  // todo move to env variables
  const key = "n8Tn91dkpKCXx1cLHb6BFmBTqjcWdaWJHoVOwADC";
  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return [...Array(10).keys()].map(n => <ImageCard photo={photos[n]}/>);
}
