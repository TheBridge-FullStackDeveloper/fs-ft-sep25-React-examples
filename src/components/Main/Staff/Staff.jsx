import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { InfinitySpin } from "react-loader-spinner";

import Card from "./Card";

const Staff = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await resp.json();
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      setPokemons(data);
    };
    getPokemons();
  }, []); // Sólo se ejecuta en el montaje del componente

  const renderCards = () =>
    pokemons.results.map((pokemon) => <Card data={pokemon} key={uuidv4()} />);

  return (
    <div>
      <h4>Pokemons encontrados: {pokemons.count || "Buscando..."}</h4>
      <section className="staff">
        {pokemons.results ? (
          renderCards()
        ) : (
          <InfinitySpin width="200" color="#4fa94d" />
        )}
      </section>
    </div>
  );
};

export default Staff;
