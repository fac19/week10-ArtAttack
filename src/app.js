import React from "react";
// import displayArtwork from "../components/artwork";
import handleArtwork from "./components/artwork/handleartwork";
import Display from "./components/artwork/displayartwork";

function App() {
  React.useEffect(() => {
    handleArtwork();
  }, []);
  // const [artwork, setArtwork] = useState(0);
  return <Display />;
}

export default App;
