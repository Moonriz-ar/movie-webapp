function Login() {
  const submitHandler = (event) => {
    event.preventDefault();

    // EXTRACT DATA FROM FORM
    const email = event.target.email.value;
    const password = event.target.password.value;

    // VALIDATION
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      console.log("Los campos no pueden estar vacios");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      console.log("Debes escribir una direccion de correo electronico valida");
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

    let loginService = fetch("http://challenge-react.alkemy.org", settings)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => console.log(data));
  };

  return (
    <>
      <h2>Formulario de submit</h2>
      <form onSubmit={submitHandler}>
        <label for="email">
          <span>Email:</span>
          <input type="email" name="email" id="email" required />
        </label>

        <label for="password">
          <span>Password:</span>
          <input type="password" name="password" id="password" required />
        </label>

        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
