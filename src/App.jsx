import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prueba from './Prueba.jsx'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  // let count = 0;
  const [count, setCount] = useState(0) // Estado del componente (memoria interna)
  const message = "Merry Christmas and Happy New Year!";

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Prueba />
      <Header />
      <Main />
      <Footer />
      <h1>{message}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cervezas que vas a donar: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
