import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-5 px-10 bg-rose-700 text-rose-50">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listado">Listado</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
