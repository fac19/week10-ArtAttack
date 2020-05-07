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
    438011,
    435580,
    436957,
    436723,
    437581,
    438011,
    25656,
    78141,
    78060,
    53219,
    208222,
    436532,
    459112,
    11234,
    438815,
    459106,
    435875,
    435885,
    435683,
    437052,
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
