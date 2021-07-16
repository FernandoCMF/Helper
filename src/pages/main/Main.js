import React from 'react';
import {
  MainContainer,
  Button,
  MainContainer_Titulos,
  MainContainer_box,
} from './MainStyle';
const Main = () => {
  return (
    <>
      <MainContainer>
        <p>IMAGEM DE FUNDO</p>
        <MainContainer_box>
          <MainContainer_Titulos>
            <h1 className="titulo">HELPER</h1>
            <h2 className="subtitulo">
              Ajude como pode <br /> com que pode
            </h2>
          </MainContainer_Titulos>
          <div>
            <Button
              type="submit"
              onClick={() => {
                console.log('click');
              }}
            >
              Contribuir
            </Button>
          </div>
        </MainContainer_box>
      </MainContainer>
    </>
  );
};

export default Main;
