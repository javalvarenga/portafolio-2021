import React from "react";
import "./styles/GenericCard.css";
function GenericCard(props) {
  const { title, description } = props;

  return (
    <div className="GenericCard">
      <img src={props.img} alt="" />
      <div className="cardInfo">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default GenericCard;
