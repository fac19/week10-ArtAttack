import React from "react";
// import displayArtwork from "../components/artwork";
import handleArtwork from "./components/artwork/handleartwork";

function App() {
  React.useEffect(() => {
    handleArtwork();
  }, []);
  // const [artwork, setArtwork] = useState(0);
  return <section className="app"></section>;
}

export default App;
