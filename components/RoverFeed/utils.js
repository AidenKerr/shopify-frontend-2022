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
      setImages(data.photos);
      console.log("set images")
    })
    .catch((error) => {
      console.error(error);
    });
};
