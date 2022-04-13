import { Routes, Route } from "react-router-dom";

import Login from "./componentes/Login";
import Listado from "./componentes/Listado";
import Test from "./componentes/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} end />
        <Route path="/listado" element={<Listado />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
