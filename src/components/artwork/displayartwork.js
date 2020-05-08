import handleArtwork from "./handleartwork";
import React from "react";

const Display = () => {
  const [artwork, setArtwork] = React.useState(0);

  // React.useEffect(() => {
  //   handleArtwork().then((artwork) => setArtwork(artwork));
  // }, []);

  React.useEffect(() => {
    handleArtwork().then((newArtwork) => {
      if (newArtwork.primaryImage === artwork.primaryImage) {
        console.log(newArtwork.primaryImage);
        console.log(artwork.primaryImage);
        // could refresh the page to get another artwork here
        window.location.reload();
      }
      setArtwork(newArtwork);
    });
  }, []);

  if (!artwork) {
    return <h3 className="display-loading">Loading..</h3>;
  }

  // Destructure keys out of `artwork`
  const { primaryImage, title, artistDisplayName, medium } = artwork;

  return (
    <div className="display-artwork-container">
      <img
        width={600}
        height={600}
        src={primaryImage}
        className="display-artwork"
        alt="artwork"
      />
      <section className="display-artworkInfo-container" max-width={600}>
        <h2 className="display-title">{title}</h2>
        <p className="display-artist">{artistDisplayName}</p>
        <p className="display-medium">{medium}</p>
      </section>
    </div>
  );
};

export default Display;
