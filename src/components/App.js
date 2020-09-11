import React from "react";
import Header from "./Header";

function App() {
  const tap1 = "Stout";
  const tap2 = "Lager";
  return (
    <React.Fragment>
      <Header />
      <h1>Tap Room </h1>
      <h3>{tap1}</h3>
      <h3>{tap2}</h3>
    </React.Fragment>
  );
}

export default App;


