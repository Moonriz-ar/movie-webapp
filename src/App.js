import { Routes, Route } from "react-router-dom";

import Login from "./componentes/Login";
import Listado from "./componentes/Listado";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} end />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  );
}

export default App;
