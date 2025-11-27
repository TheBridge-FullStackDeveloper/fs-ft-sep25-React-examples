import { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";

// Importamos el contexto a utilizar
import { UserContext } from "./context/UserContext";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [username, setUsername] = useState("Marta");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  // Datos para alimentar al contexto que se va a proveer
  const userData = { username, updateUsername };

  return (
    <>
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
