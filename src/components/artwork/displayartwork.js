import handleArtwork from "./handleartwork";
import React from "react";

const Display = () => {
  const [artwork, setArtwork] = React.useState(0);

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
