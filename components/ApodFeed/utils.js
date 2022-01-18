export const getPhotos = (start, end, setImages) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  fetch(
    `https://api.nasa.gov/planetary/apod?start_date=${start}&end_date=${end}&api_key=${key}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then((data) => {
      const formatted = data
        .filter((img) => excludeInvalidURL(img))
        .map((img) => format(img));
      setImages(formatted);
    })
    .catch((error) => {
      console.error(error);
    });
};

const excludeInvalidURL = (img) => {
  return img.media_type === 'image';
};

const format = (img) => {
  return {
    src: img.url,
    id: img.url,
    title: img.title,
    by: img.copyright || 'unknown',
    date: img.date,
    alt: 'Astronomy photo of the day',
  };
};
