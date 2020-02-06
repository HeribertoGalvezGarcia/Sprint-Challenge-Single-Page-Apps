import React, {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterPage from "./components/CharacterPage";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => setCharacters(res.data.results))
      .catch(e => console.log(e))
  }, []);

  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
        <CharacterList characters={characters} />
        <SearchForm setCharacters={setCharacters} />
      </Route>
      <Route path="/:id" component={CharacterPage} />
    </main>
  );
}
