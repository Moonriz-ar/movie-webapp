import Swal from "sweetalert2";
import { useNavigate, Navigate } from "react-router-dom";

function Login() {
  // route navigate react hook
  const navigate = useNavigate();

  // retrieve token to protect login page after login
  const token = localStorage.getItem("token");

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
      {token && <Navigate to="/listado" />}
      <div className="py-3 my-5 sm:max-w-3xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 border rounded-3xl p-5 mx-3 flex flex-col relative">
          <h2 className="pb-5 text-xl text-slate-800">Login form</h2>
          <form onSubmit={submitHandler} className="flex flex-col items-start">
            <label htmlFor="email" className="mt-2">
              <span className="mr-3">Email:</span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please enter email..."
              />
            </label>

            <label htmlFor="password" className="mt-2">
              <span className="mr-3">Password:</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Please enter password..."
              />
            </label>

            <button
              type="submit"
              className="bg-rose-700 text-rose-50 px-2 py-1 mt-5 rounded"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
