import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      Swal.fire({
        icon: "error",
        title: "You have a enter a keyword",
      });
    } else if (keyword.length < 4) {
      Swal.fire({
        icon: "error",
        title: "You have to enter at least 4 characters",
      });
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultados/${keyword}`);
    }
  };

  return (
    <form
      className="flex items-center space-x-3 mt-5 md:mt-0"
      onSubmit={submitHandler}
    >
      <label className="text-gray-800">
        <input
          className="p-1"
          type="text"
          name="keyword"
          placeholder="Search a movie..."
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
