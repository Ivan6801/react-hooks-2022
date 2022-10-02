import { useState, useEffect, useReducer } from "react";
import { favoriteReducer, initialState } from "../reducers";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  var favIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png";
  var delIcon = "https://cdn-icons-png.flaticon.com/512/1828/1828970.png";
  console.log("Favorites: ", favorites);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.warn("Error in fetch:", error));
  }, []);

  const handleClick = (favorite) => {
    dispatch({
      type: !!isCharacterInFavorites(favorite)
        ? "REMOVE_FROM_FAVORITE"
        : "ADD_TO_FAVORITE",
      payload: favorite,
    });
  };

  const isCharacterInFavorites = (favorite) =>
    favorites.favorites.find((character) => character.id === favorite.id);

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => {
        return <li key={favorite.id}>{favorite.name}</li>;
      })}
      {characters.map((character) => {
        return (
          <div className="Characters">
            <div className="item" key={character.id}>
              <h3>{character.name}</h3>
              <button type="button" onClick={() => handleClick(character)}>
                <img
                  style={{ cursor: 'pointer' }}
                  width={30}
                  src={!!isCharacterInFavorites(character) ? favIcon : delIcon}
                  alt="Icon"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
