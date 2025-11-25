import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ChristmasItem from "./ChristmasItem/ChristmasItem";

const ChristmasList = () => {
  const products = [
    {
      title: "Santa Hat",
      description: "A festive red and white Santa hat.",
      price: 9.99,
      img_url:
        "https://cdn.thewirecutter.com/wp-content/media/2022/11/santahats-2048px-8559-2x1-1.jpg",
    },
    {
      title: "Christmas Tree",
      description: "A small decorative Christmas tree.",
      price: 29.99,
      img_url: "https://thumbs.dreamstime.com/b/christmas-tree-22033911.jpg",
    },
    {
      title: "Snow Globe",
      description: "A beautiful snow globe with a winter scene.",
      price: 14.99,
      img_url:
        "https://t4.ftcdn.net/jpg/02/95/66/81/360_F_295668104_5PkXfp94Ym3qk9D81T939Jd9VBmAOpCK.jpg",
    },
    {
      title: "Holiday Lights",
      description: "String lights to brighten up your holidays.",
      price: 19.99,
      img_url:
        "https://static.vecteezy.com/system/resources/thumbnails/047/195/608/small/christmas-winter-blurred-background-with-wooden-table-and-garland-lights-with-golden-bokeh-photo.jpg",
    },
    {
      title: "Reindeer Plush",
      description: "A soft and cuddly reindeer plush toy.",
      price: 12.99,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYX3nKIyv-z9uzyCQo89yHNMMIvKJmt9n8g&shttps://plushhorse.co.uk/wp-content/uploads/2018/10/REINDEER-LYING.jpg",
    },
  ];

  const [items, setItems] = useState([]); // Array de items a representar

  // Estado inicial del formulario
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: 0,
    img_url: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    console.log(e.target.title.value);
    console.log(e.target.price.value);

    // Añadir objeto al array items
    setItems([...items, values]);
  };

  const paintData = () =>
    items.map((item, index) => (
      <ChristmasItem
        data={item}
        remove={() => removeItem(index)}
        edit={(updatedItem) => editItem(index,updatedItem)}
        key={uuidv4()}
      />
    ));

  const loadData = () => setItems(products); // items = products

  const removeData = () => setItems([]); // items = []

  const removeItem = (i) => {
    const filteredItems = items.filter((item, index) => index !== i);
    setItems(filteredItems); // Carga el estado con los items restantes
  };

  // i --> posicion del array a cambiar
  // updatedItem --> dato actualizado a guardar
  const editItem = (i, updatedItem) => {
    let data = [...items]; // crea array nuevo
    data[i] = updatedItem;
    setItems(data); // Guardar el array con el elemento modificado
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Título</label>
        <br />
        <input type="text" name="title" onChange={handleChange} />
        <br />

        <label htmlFor="description">Description</label>
        <br />
        <input type="text" name="description" onChange={handleChange} />
        <br />

        <label htmlFor="price">Precio</label>
        <br />
        <input type="number" name="price" onChange={handleChange} />
        <br />

        <label htmlFor="url">URL imagen</label>
        <br />
        <input type="url" name="img_url" onChange={handleChange} />
        <br />

        {values.title &&
        values.description &&
        values.price &&
        values.img_url ? (
          <button type="submit">Crear</button>
        ) : (
          <b>Completa los campos</b>
        )}
      </form>

      <button onClick={loadData}>Cargar datos</button>
      <button onClick={removeData}>Reset</button>

      {/* <ChristmasItem data={products[0]}/>
  <ChristmasItem data={products[1]}/>
  <ChristmasItem data={products[2]}/>
  <ChristmasItem data={products[3]}/> */}
      {paintData()}
    </div>
  );
};

export default ChristmasList;
