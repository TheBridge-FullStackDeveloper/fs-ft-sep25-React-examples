import React from "react";

// const Card = ({data:{name,url}}) => {
  
const Card = ({data}) => {
  const {name,url} = data;
  return <article>
    <h4>{name}</h4>
    <a href={url}>URL</a>
  </article>;
};

export default Card;
