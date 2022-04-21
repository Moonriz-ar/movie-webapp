import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header({ favourites }) {
  const token = localStorage.getItem("token");
  return (
    <header className="py-5 z-10 px-10 bg-rose-700 text-rose-200 flex justify-between items-center flex-col md:flex-row fixed w-full shadow-md">
      <nav className="flex space-x-5 items-center">
        <h3 className="text-rose-50 text-2xl">ALKEMIX</h3>
        <ul className="flex space-x-2 md:space-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listado">List</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites{" "}
              {token && (
                <span className="text-rose-100 font-bold">
                  {favourites.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;
