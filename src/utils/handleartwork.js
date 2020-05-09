const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const handleArtwork = () => {
  // The reason why we fetch through an array of specific objectIDs is because there are more than 475,000 'objects' in total, and it significantly slows down (something). Also there were objects which don't have image property.
  let arr = [
    437658,
    438011,
    435580,
    436957,
    436532,
    437581,
    436532,
    459112,
    435875,
    438815,
    459106,
    435885,
    782304,
    459121,
    436947,
    436965,
    438136,
  ];

  const index = Math.floor(Math.random() * arr.length);

  return fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arr[index]}`
  )
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};

export default handleArtwork;
