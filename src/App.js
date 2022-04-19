import { Routes, Route } from "react-router-dom";

import Login from "./componentes/Login";
import Listado from "./componentes/Listado";
import Detalle from "./componentes/Detalle";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div id="app" className="h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-auto mb-auto">
        <Routes>
          <Route path="/" element={<Login />} end />
          <Route path="/listado" element={<Listado />} />
          <Route path="/detalle" element={<Detalle />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
