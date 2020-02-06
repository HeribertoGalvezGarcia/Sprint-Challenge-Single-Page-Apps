import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterPage({match: {params: {id}}}) {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => setCharacter(res.data))
      .catch(e => console.log(e))
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <CharacterCard {...character} />
  );
}
