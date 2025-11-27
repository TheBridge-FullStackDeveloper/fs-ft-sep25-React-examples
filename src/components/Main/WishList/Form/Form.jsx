import React, {useState} from "react";

const Form = ({add}) => {
    // Estado inicial del formulario
    const [values, setValues] = useState({
      title: "",
      description: ""
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
      add(values); // invocar la función add pasada por props
    };
  



  return <div>WishForm

<h3>Introduce un destino deseado</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Título</label><br />
        <input type="text" name="title" onChange={handleChange} /><br />

        <label htmlFor="description">Description</label><br />
        <input type="text" name="description" onChange={handleChange} /><br />

        <button type="submit">Crear destino</button>
      </form>

  </div>;
};

export default Form;