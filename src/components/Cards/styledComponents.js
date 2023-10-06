import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  background-color: rgb(100, 50, 110);
  overflow: auto;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  margin: 20px auto;
  margin-bottom: 3px;
  flex-wrap: wrap;
  padding: 1em;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Sombra alrededor del contenedor */
  transition: transform 0.3s ease; /* Transición suave para transformaciones */

 

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px auto;
  }
`;
