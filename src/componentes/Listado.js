import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Card from "./Card";

function Listado() {
  const token = localStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    try {
      fetch(
        `${process.env.REACT_APP_MOVIE_BASE_URL}${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const apiData = data.results;
          setMoviesList(apiData);
        });
    } catch (err) {
      console.log(err);
    }
  }, [setMoviesList]);

  return (
    <>
      {!token && <Navigate replace to="/" />}
      <h2>Este es el componente de listado</h2>
      <section className="grid grid-cols-4 gap-4">
        <Card
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
        <Card
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
        <Card
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
        <Card
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nunc id cursus metus aliquam. Amet venenatis urna cursus eget nunc scelerisque viverra. Consequat nisl vel pretium lectus quam id. Tempor nec feugiat nisl pretium fusce. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Sed ullamcorper morbi tincidunt ornare. Sit amet luctus venenatis lectus magna fringilla. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Nec feugiat nisl pretium fusce id. Non curabitur gravida arcu ac. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. In egestas erat imperdiet sed euismod nisi porta. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Scelerisque in dictum non consectetur. Elit duis tristique sollicitudin nibh sit. Et pharetra pharetra massa massa ultricies. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Ultricies mi quis hendrerit dolor magna eget est. Nec feugiat in fermentum posuere urna nec tincidunt.

Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Commodo odio aenean sed adipiscing diam donec adipiscing. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Nibh ipsum consequat nisl vel pretium lectus quam. Sem integer vitae justo eget magna. Eu turpis egestas pretium aenean. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Cras tincidunt lobortis feugiat vivamus at augue eget. Lectus sit amet est placerat. Vitae congue eu consequat ac felis donec et odio pellentesque. Sed cras ornare arcu dui vivamus arcu. Diam vel quam elementum pulvinar etiam non. Vulputate enim nulla aliquet porttitor lacus luctus. Sem viverra aliquet eget sit amet tellus. Adipiscing commodo elit at imperdiet dui accumsan. Sed euismod nisi porta lorem mollis aliquam. Platea dictumst vestibulum rhoncus est pellentesque. Ut tellus elementum sagittis vitae et.

Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Ultrices in iaculis nunc sed augue lacus viverra. Fusce id velit ut tortor pretium viverra. Egestas dui id ornare arcu odio ut. Enim eu turpis egestas pretium aenean pharetra magna. Commodo elit at imperdiet dui accumsan. Volutpat ac tincidunt vitae semper. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Enim ut sem viverra aliquet eget sit amet tellus cras. Laoreet non curabitur gravida arcu ac tortor. Mauris vitae ultricies leo integer malesuada nunc vel. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Euismod nisi porta lorem mollis aliquam. Porttitor eget dolor morbi non arcu risus quis varius quam. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Neque convallis a cras semper auctor neque vitae. Donec adipiscing tristique risus nec feugiat.`}
        />
        <Card description="hi" />
        <Card description="hello" />
      </section>
    </>
  );
}

export default Listado;
