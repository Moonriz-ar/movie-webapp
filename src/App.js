import { Routes, Route } from "react-router-dom";

import Login from "./componentes/Login";
import Listado from "./componentes/Listado";

function App() {
  return (
    <div id="app">
      <h1 className="underline">Hello world!</h1>
      <Routes>
        <Route path="/" element={<Login />} end />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </div>
  );
}

export default App;
