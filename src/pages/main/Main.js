import React from 'react';
import {
  MainContainer,
  Button,
  Main_Titulos,
  MainContainer_box,
  Main_Logo,
  ArrowDown,
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
            as="button"
            type="submit"
            onClick={() => alert('click')}
            href="#"
          >
            Contribuir
          </Button>
        </MainContainer_box>
        <ArrowDown title={'Arrow down'} />
      </MainContainer>
    </>
  );
};

export default Main;
