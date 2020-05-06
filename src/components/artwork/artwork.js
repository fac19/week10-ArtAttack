const checkRes = (res) => {
  if (res.status !== 200) {
    console.log(`Error with the request! ${res.status}`);
    return;
  }
  return res.json();
};

export const displayArtwork = (artwork) => {
  return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/
    `)
    .then(checkRes)
    .catch((err) => {
      throw new Error(`fetch displayArtwork failed ${err}`);
    });
};
