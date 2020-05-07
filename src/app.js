import React from "react";
// import displayArtwork from "../components/artwork";
import handleArtwork from "./components/artwork/handleartwork";
import Display from "./components/artwork/displayartwork";
import Canvas from "./components/canvas/canvas";
// import Timer from ".components/timer/timer";

function App() {
  React.useEffect(() => {
    handleArtwork();
  }, []);
  // const [artwork, setArtwork] = useState(0);
  return (
    <>
      <Display /> <Canvas />
    </>
  );
}

export default App;
