import React from "react";

const TopicCard =({data}) => {
  return <li>{data.title} - {data.selftext}</li>
};

export default TopicCard;
