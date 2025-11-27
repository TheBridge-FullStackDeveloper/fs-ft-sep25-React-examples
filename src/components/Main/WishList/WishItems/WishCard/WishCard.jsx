
import React from "react";

const WishCard = ({data}) => {
  const {title, description} = data;
  return <article >
    <h4>{title}</h4>
    <p>{description}</p>
  </article>;
};

export default WishCard;