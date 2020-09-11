import React from "react";

const tap1 = "Stout";
const tap2 = "Lager";

function Keg() {
  return (
    <React.Fragment>
       <h1>Keg List </h1>
      <h4>{tap1}</h4>
      <h4>{tap2}</h4>
    </React.Fragment>
  );

}

export default Keg;

