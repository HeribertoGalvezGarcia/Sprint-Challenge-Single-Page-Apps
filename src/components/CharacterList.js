import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 5px;
`;

export default function CharacterList({characters}) {
  return (
    <StyledSection>
      {characters.map((character, i) => <CharacterCard key={i} {...character} />)}
    </StyledSection>
  );
}
