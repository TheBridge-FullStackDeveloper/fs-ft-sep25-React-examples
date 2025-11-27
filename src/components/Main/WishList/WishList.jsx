import React, { useState } from "react";
import Form from './Form';
import WishItems from './WishItems';

const WishList = () => {

  const [list,setList] = useState([]); 

  const addItem = (new_item) => setList([...list,new_item]);

  return <div>
    <Form add={addItem}/>
    <WishItems list={list}/>
  </div>;
};

export default WishList;