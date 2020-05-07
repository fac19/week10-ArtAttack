import handleArtwork from "./handleartwork";
import React, { useState, useEffect } from "react";

// const checkRes = (res) => {
//   if (res.status !== 200) {
//     console.log(`Error with the request! ${res.status}`);
//     return;
//   }
//   return res.json();
// };

// const DisplayArtwork = (artwork) => {
//   return fetch(handleArtwork)
//     .then(checkRes)
//     .then((artwork) => console.log(artwork))
//     .catch((err) => {
//       throw new Error(`fetch displayArtwork failed ${err}`);
//     });
// };

// export default DisplayArtwork;

// this 'props' parameter not being used.. am I doing something wrong?
// maybe we don't need it.
const Display = (props) => {
  // What's the difference between react.useState vs useState?
  // useState('') instead of useState(0)? both worked.
  const [artwork, setArtwork] = useState(0);

  React.useEffect(() => {
    handleArtwork().then((artwork) => setArtwork(artwork));
  }, []);

  if (!artwork) {
    return <h3 className="display-loading">Loading..</h3>;
  }

  // Destructure keys out of `artwork`
  const { primaryImage, title, artistDisplayName, medium } = artwork;

  return (
    <div className="display-artwork-container">
      <img
        width="50%"
        src={primaryImage}
        className="display-artwork"
        alt="artwork"
      />
      <h2 className="display-title">{title}</h2>
      <p className="display-artist">{artistDisplayName}</p>
      <p className="display-medium">{medium}</p>
    </div>
  );
};

export default Display;
