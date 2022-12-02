import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters, getCharactersFromApi } from "../store/CharactersFromAPI/actions";
import { getCharacters, selectCharacters, selectCharactersError, selectCharactersLoading } from "../store/CharactersFromAPI/selectors";

export default function Characters () {
    const dispatch = useDispatch()
    const characters = useSelector(selectCharacters);
    const error = useSelector(selectCharactersError);
    const loading = useSelector(selectCharactersLoading);

    const requestCharacters = () => {
        dispatch(getAllCharacters());
    }

    useEffect(() => {
        // requestCharacters();
    }, []);
  
    return (
        <>
        
        <button className="btn btn-secondary" onClick={requestCharacters}>Click, if data is not loaded</button>
            {loading && <p>Is loading...</p>}
            <div className="characters_wrapper">
                <ul>
                    {characters.map((character, idx) => (
                        <li className="characters_row" key={idx}>
                            <div>Герой: {character.name} </div>
                            <div>Имя актёра: {character.portrayed}</div>
                        </li>
                    ))}
                </ul>
            </div>
        {error && <p>Error: {error}</p>}
        </>
        
    )

}