import styled, { keyframes } from 'styled-components';
import { DownArrowCircle } from '@styled-icons/boxicons-regular/DownArrowCircle';
import ImagemMain from '../../assets/imagem-main.png';

export const MainContainer = styled.section`
  background-image: url(${ImagemMain});
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-attachment: fixed;
`;

export const Main_Logo = styled.img`
  width: 200px;
  height: 200px;
  margin: 15px;
`;

export const MainContainer_box_tittle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20%;
`;

export const Main_Title = styled.div`
  display: flex;
  min-width: 20%;
  flex-direction: column;

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
    font-size: 35px;
    align-self: center;
  }
`;

export const MainContainer_box_button = styled.div`
  margin-top: 25px;
`;

export const Button = styled.button`
  background-color: #ff9f1c;
  border: unset;
  box-shadow: 0px 0px 4px 2px rgba(1, 22, 39, 1);
  font-size: 20px;
  font-weight: bold;
  width: 150px;
  height: 60px;
  padding: 0.25em 1em;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b46900;
  }
`;

export const kickArrow = keyframes`
  0% {
    transform: translateY(-20%);
  }
  50%{
    transform: translateY(5%);
  }
  100%{
    transform: translateY(-20%);
  }

`;

export const MainContainer_arrowDown = styled.div`
  position: absolute;
  bottom: 0;
`;

export const ArrowDown = styled(DownArrowCircle)`
  margin-top: 0px;
  animation: ${kickArrow} 2s linear infinite;
  width: 40px;
  color: #ffebce;
`;
