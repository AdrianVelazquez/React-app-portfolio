import React from "react";
import Profiles from "./Profiles";
import Samples from "./Samples";
import Cards from "./Cards";
import Stack from "./Stack";

const mainStyles = {
  width: "1000px",
  height: "100%",
  margin: "0 auto"
  // position: "relative"
};

function App() {
  return (
    <div id="main" style={mainStyles}>
      <Profiles />
      <Samples />
      <Cards />
      <Stack />
    </div>
  );
}
// <Banners />
export default App;
