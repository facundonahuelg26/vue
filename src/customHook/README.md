# Custom Hook para traer datos de una api

```js
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState({})

  const getData = (url) => {
    setLoading(true);
    return fetch(url)
      .then((res) => {
        const showError = {
          err: true,
          statuscode: res.status,
          message: "Error in your request",
        };
        if (!res.ok) {
          throw showError;
        }
        return res.json();
      })
      .then((data) => {
        setData(data.results)
        setPage(data.info)
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
      getData(url);
  }, [url]);

  return { data, loading, error, page };
};
```

## Usar Context para manejar los estados

```js
import React, { useState, createContext, useContext } from "react";
import { useFetch } from "../hooks/useFetch";

const CharactersContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const {data, loading, error, page} = useFetch(url)

  const handleClick = (id) => {
    data.filter((item) => item.id === id && setCharacter(item));
    if (character) {
      setUrl(
        setUrl(`https://rickandmortyapi.com/api/character/${character.id}`)
      );
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const filterCharacters = data.filter((item) => (
      item.name.toLowerCase().includes(search.toLowerCase())
    ))
    return setFilter(filterCharacters);
  }

  const handlePrevious = () => setUrl(page.prev)

  const handleNext = () => setUrl(page.next)

  return (
    <CharactersContext.Provider value={{
        character,
        setCharacter,
        search,
        setSearch,
        filter,
        setFilter,
        url,
        setUrl,
        handleChange,
        handleSubmit,
        handlePrevious,
        handleNext,
        data,
        loading, 
        error,
        page,
        handleClick 
    }}>
        {children}
    </CharactersContext.Provider>
  );

};

export const useCharacters = () => {
  const context = useContext(CharactersContext);

  return context;
};
```


## Lista de resultados

```js
import React from "react";
import { useCharacters } from "../context/characterContext";
import Character from "./Character";

const DataCharacters = () => {
  const { data, filter, character, handleClick } = useCharacters();

  const charactersData = filter ? filter : data;

  if (character) return <Character character={character} />;
  return (
    <div>
      {filter && <a href="/">Todos los personajes</a>}
      {!charactersData
        ? null
        : charactersData.map(({ id, name, image }) => (
            <div key={id} onClick={() => handleClick(id)}>
              <p>{name}</p>
              <img src={image} alt={name} />
            </div>
          ))}
    </div>
  );
};

export default DataCharacters;
```

## Componente de paginado

```js
import React from "react";
import { useCharacters } from "../context/characterContext";

const Pages = ({ prev, next }) => {
  const { handlePrevious, handleNext } = useCharacters();
  
  return (
    <>
      <br />
      {prev && <button onClick={handlePrevious}>Previous</button>}
      {next && <button onClick={handleNext}>Next</button>}
    </>
  );
};

export default Pages;
```

## Componente de filtrado de resultados

```js
import React from "react";
import { useCharacters } from "../context/characterContext";

const FormFilter = () => {
  const { handleSubmit, handleChange, search } = useCharacters();
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

export default FormFilter;
```


## Provider

```js
const App = () => {
   
  return (
    <>
     <CharacterProvider>
      <Characters/>
     </CharacterProvider>
    </>
  );
};

export default App;
```