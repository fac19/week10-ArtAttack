import handleArtwork from "./handleartwork";

const checkRes = (res) => {
  if (res.status !== 200) {
    console.log(`Error with the request! ${res.status}`);
    return;
  }
  return res.json();
};

export const displayArtwork = (artwork) => {
  return fetch(handleArtwork)
    .then(checkRes)
    .catch((err) => {
      throw new Error(`fetch displayArtwork failed ${err}`);
    });
};

export displayArtwork;