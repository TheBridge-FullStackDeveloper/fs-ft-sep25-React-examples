import React from "react";
import WishCard from "./WishCard";

const WishItems = ({ list }) => {

  const paintData = () =>
    list.map((item, index) => <WishCard key={index} data={item} />);

  return <div>WishItems
    <h3>Lista de deseos</h3>
    {paintData()}

  </div>;
};

export default WishItems;
