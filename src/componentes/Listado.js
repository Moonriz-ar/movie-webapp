import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Listado() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  });

  return <h2>Este es el componente de listado</h2>;
}

export default Listado;
