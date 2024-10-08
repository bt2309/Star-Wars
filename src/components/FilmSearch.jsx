import { useState } from "react";
import { searchFilms } from "../services/swService";

export default function FilmSearch({ setFilms }) {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchFilms(search);
    console.log(data);
    setFilms(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          Find:{" "}
          <input
            type="search"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <button>Search</button>
      </fieldset>
    </form>
  );
}
