import { useState, useEffect, useReducer } from "react";
import { favoriteReducer, initialState } from "../reducers";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  return (
    <div className="Characters">
      {characters.map((character) => {
        return (
          <div className="Characters">

            {favorites.favorites.map((favorite) => {
              return (
                <li key={favorite.id}>
                  {favorite.name}
                </li>
              )
            })}

            <div className="item" key={character.id}>
              <h3>{character.name}</h3>
              <button type="button" onClick={() => handleClick(character)}>
                Agregar a Favoritos
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
