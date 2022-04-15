import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  // route navigate react hook
  const navigate = useNavigate();

  // login form handler
  const submitHandler = (event) => {
    event.preventDefault();

    // EXTRACT DATA FROM FORM
    const email = event.target.email.value;
    const password = event.target.password.value;

    // VALIDATION
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Los campos no pueden estar vacios",
      });
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Debes escribir una direccion de correo electronico valida",
      });
      return;
    }

    // POST REQUEST FOR LOGIN
    const user = {
      email,
      password,
    };

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    };

    fetch("http://challenge-react.alkemy.org", settings)
      .then((response) => {
        console.log("response", response);
        if (!response.ok) {
          Swal.fire({
            icon: "error",
            title: "Algunos datos de login son incorrectos",
          });
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log("data", data);
        if (data) {
          Swal.fire({
            title: "Ingresaste correctamente!",
            icon: "success",
            timer: 2000,
          });
          const tokenRecibido = data.token;
          localStorage.setItem("token", tokenRecibido);
          navigate("/listado");
        }
      });
  };

  return (
    <>
      <h2>Formulario de submit</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          <span>Email:</span>
          <input type="email" name="email" id="email" />
        </label>

        <label htmlFor="password">
          <span>Password:</span>
          <input type="password" name="password" id="password" />
        </label>

        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
