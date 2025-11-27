import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from "../../../context/UserContext";

const Home = () => {
  // Consumir el contexto
  const { updateUsername } = useContext(UserContext);
  
  const [newUsername, setNewUsername] = useState("");

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUsername(newUsername);
    setNewUsername("");
  };

  return (
    <div>
      <h2>Update Username</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newUsername} onChange={handleInputChange} />
        <button type="submit">Update</button>
      </form>

      <ul>
        <li><Link to='/product'>Busca todos los products /products</Link></li>
        <li><Link to='/product?limit=4&sort=desc'> Busca productos filtrados /product?limit=4&sort=desc</Link></li>
        <li><Link to='/product/3'>Busca 1 producto /products/3</Link></li> 
      </ul>
    </div>
  );
};

export default Home;
