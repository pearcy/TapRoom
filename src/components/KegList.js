import React from "react";
import Keg from "./Keg";

function KegList() {
  return (
    <Keg
      name="Stout"
      brand="New Belgium"
      price="$ 4.00"
      abv="7%"
    />
    <Keg
      name="Lager"
      brand="Surly"
      price="$ 4.00"
      abv="6%"
    />
  );
}

export default KegList;

