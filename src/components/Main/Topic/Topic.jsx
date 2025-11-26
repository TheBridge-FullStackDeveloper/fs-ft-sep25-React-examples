import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";

import TopicCard from './TopicCard';

const Topic = () => {

  const [value, setValue] = useState("holidays"); // Para guardar el dato a buscar
  const [posts, setPosts] = useState([]); // Para guardar los posts
  
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://www.reddit.com/r/${value}.json`);
        const json = res.data;

        // Guarda en el array de posts el resultado. Procesa los datos
        setPosts(json.data.children.map(c => c.data));
      }catch(e){
        setPosts([]) // No pintes nada 
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate. Recibir actualizaciones


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
  };


  const renderCards = () =>
    posts.map((post) => <TopicCard data={post} key={uuidv4()} />);


  return    <section className="topic">
              <h1>Topic</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic"/>
                <button>Buscar</button>
              </form>

              {posts.length!==0?
                                <ul className='topics'>
                                  {renderCards()}
                                </ul>
                                :""
              }
            </section>
};

export default Topic;