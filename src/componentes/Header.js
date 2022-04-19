import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="py-5 px-10 bg-rose-700 text-rose-200 flex justify-between items-center flex-col md:flex-row fixed w-full">
      <nav className="flex space-x-5 items-center">
        <h3 className="text-rose-50 text-2xl">ALKEMIX</h3>
        <ul className="flex space-x-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listado">Listado</Link>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
}

export default Header;
