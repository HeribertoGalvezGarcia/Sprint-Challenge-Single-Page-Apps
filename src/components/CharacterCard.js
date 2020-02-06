import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export default function CharacterCard({id, name, status, species, type, gender, origin: {name: origin}, location: {name: location}}) {
  return (
    <StyledDiv>
      <Link to={`/${id}`}><h2>{name}</h2></Link>
      <StyledDiv>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        {type && <p>Type: {type}</p>}
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
        <p>Location: {location}</p>
      </StyledDiv>
    </StyledDiv>
  );
}
