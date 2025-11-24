//rfce
import React from 'react'

function Prueba() {
  let mensaje = "Queso";
  let numero = 2;
  console.log(mensaje + numero);
  

  return (
    <div>
        <h1>Prueba</h1>
        <p>Esto es una prueba</p>
        <p>{mensaje+" "+numero}</p>
    </div>
  )
}

export default Prueba