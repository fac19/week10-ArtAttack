import React from "react";
// import displayArtwork from "../components/artwork";
import handleArtwork from "./components/artwork/handleartwork";
import Display from "./components/artwork/displayartwork";
import Canvas from "./components/canvas/canvas";
import Timer from "./components/timer/timer";

function App() {
  React.useEffect(() => {
    handleArtwork();
  }, []);

  return (
    <div className="app">
      <Timer />
      <section className="app-container-artwork-canvas">
        <Display className="app-display-artwork" />
        <Canvas className="app-display-canvas" />
      </section>
    </div>
  );
}

export default App;
