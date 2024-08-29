import React from "react";

const BeverageCard = (props) => (
  <div className="">
    <div className="shadow-md p-4 w-1/4">
        <img src={`./images/${props.image}`} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.price}</span>
    </div>
  </div>
);

export default BeverageCard;