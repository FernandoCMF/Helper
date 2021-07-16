import styled from 'styled-components';

export const MainContainer = styled.section`
  background-color: #6c7a89;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    align-self: center;
  }
`;

export const MainContainer_box = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainContainer_Titulos = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-self: center;

  .titulo {
    font-size: 30px;
  }

  .subtitulo {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  background-color: #ff9f1c;
  border: unset;
  box-shadow: 0px 0px 4px 2px rgba(1, 22, 39, 1);
  font-size: 18px;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
`;
