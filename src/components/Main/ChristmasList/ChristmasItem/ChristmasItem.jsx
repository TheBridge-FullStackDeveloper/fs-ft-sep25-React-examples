import React, { useState } from "react";
// import "./ChristmasItem.css";

const ChristmasItem = ({ data, remove, edit }) => {
  const { title, description, price, img_url } = data;

  const [isEditing,setIsEditing] = useState(false); // Para mostrar/esconder modal
  const [editValues, setEditValues] = useState({ ...data });

  const handleEditChange = (e) => {
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editValues);
    // Editar el elemento y lo actualiza en el array
    edit(editValues); 
    setIsEditing(false);
  };

  return (
    <article>
      <h4>{title || "--"}</h4>
      <p>{description || "--"}</p>
      <p>{price || "--"}€</p>
      <img className="picture_item " src={img_url} alt={title} />
      <br />
      <button onClick={remove}>Borrar</button>
      <button onClick={()=>setIsEditing(true)}>Editar</button>
      {isEditing?<form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="title"
            value={editValues.title}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="description"
            value={editValues.description}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="price"
            value={editValues.price}
            onChange={handleEditChange}
          />
          <input
            type="url"
            name="img_url"
            value={editValues.img_url}
            onChange={handleEditChange}
          />
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </form>:null}
    </article>
    

  );
};

export default ChristmasItem;
