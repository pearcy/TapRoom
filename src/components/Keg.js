import React from "react";


function Keg() {
  return (
    <React.Fragment>
       <h1>Keg List </h1>
       <h4>{props.name}</h4>
       <h4>{props.brand}</h4>
       <h4>{props.price}</h4>
       <h4>{props.abv}</h4>
      </hr>
    </React.Fragment>
  );

}

export default Keg;


      // name="Stout"
      // brand="New Belgium"
      // price="$ 4.00"
      // abv="8%"

