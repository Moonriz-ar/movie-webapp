import { Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

import Login from "./componentes/Login";
import Listado from "./componentes/Listado";
import Detalle from "./componentes/Detalle";
import Resultados from "./componentes/Resultados";

function App() {
  return (
    <div id="app" className="h-screen flex flex-col justify-between relative">
      <Header />
      <div className="flex-auto mb-auto px-5 pb-10 pt-40 md:pt-40  bg-slate-50">
        <Routes>
          <Route path="/" element={<Login />} end />
          <Route path="/listado" element={<Listado />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
