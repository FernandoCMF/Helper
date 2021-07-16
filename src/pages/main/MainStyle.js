import styled from 'styled-components';
import ImagemMain from '../../assets/imagem-main.png';

export const MainContainer = styled.section`
  background-image: url(${ImagemMain});
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer_box = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Main_Logo = styled.img`
  width: 200px;
  height: 200px;
  margin: 15px;
`;

export const Main_Titulos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .titulo {
    align-self: center;
    font-size: 50px;
    color: #ffffff;
    margin: 10px;
  }

  .subtitulo {
    widows: 50%;
    font-weight: normal;
    color: #ffffff;
    font-size: 30px;
    align-self: center;
  }
`;

export const Button = styled.button`
  background-color: #ff9f1c;
  border: unset;
  box-shadow: 0px 0px 4px 2px rgba(1, 22, 39, 1);
  font-size: 20px;
  font-weight: bold;
  margin: 1em;
  width: 200px;
  height: 60px;
  padding: 0.25em 1em;
  border-radius: 5px;
`;
