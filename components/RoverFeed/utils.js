export const getPhotos = (sol, page, setImages) => {
  // todo move to env variables
  const key = "n8Tn91dkpKCXx1cLHb6BFmBTqjcWdaWJHoVOwADC";
  fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}&api_key=${key}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then((data) => {
      const formatted = data.photos.map((img) => format(img));
      setImages(formatted);
      console.log("set images");
    })
    .catch((error) => {
      console.error(error);
    });
};

const format = (img) => {
  const full_name = img?.camera?.full_name;
  const rover = img?.rover?.name;

  return {
    src: img.img_src,
    id: img.id,
    title: full_name,
    by: rover,
    date: img.earth_date,
    alt: `Martian surface taken by the ${full_name} Camera on ${rover}`,
  };
};
