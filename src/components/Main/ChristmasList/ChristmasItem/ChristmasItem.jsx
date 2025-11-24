import React from "react";
import "./ChristmasItem.css";

const ChristmasItem = ({ data, remove }) => {
  console.log("******************");
  console.log(data);

  const { title, description, price, img_url } = data;
  console.log(title, description, price, img_url);

  return (
    <article>
      <h4>{title || "--"}</h4>
      <p>{description || "--"}</p>
      <p>{price || "--"}€</p>
      <img className="picture_item " src={img_url} alt={title} />
      <br />
      <button onClick={remove}>Borrar</button>
    </article>
  );
};

export default ChristmasItem;
