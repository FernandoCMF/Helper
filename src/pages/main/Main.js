import React from 'react';
import {
  MainContainer,
  Button,
  Main_Titulos,
  MainContainer_box,
  Main_Logo,
} from './MainStyle';
import Logo from 'assets/logo.svg';

const Main = () => {
  return (
    <>
      <MainContainer>
        <header>
          <Main_Logo src={Logo} />
        </header>
        <MainContainer_box>
          <Main_Titulos>
            <h1 className="titulo">HELPER</h1>
            <h2 className="subtitulo">Ajude como pode</h2>
            <h2 className="subtitulo">com que pode</h2>
          </Main_Titulos>
        </MainContainer_box>
        <MainContainer_box>
          <Button
            type="submit"
            onClick={() => {
              console.log('click');
            }}
          >
            Contribuir
          </Button>
        </MainContainer_box>
      </MainContainer>
    </>
  );
};

export default Main;
