import React from 'react';
import {
  MainContainer,
  Button,
  Main_Title,
  MainContainer_box_tittle,
  Main_Logo,
  ArrowDown,
  MainContainer_box_button,
  MainContainer_arrowDown,
} from './MainStyle';
import Logo from 'assets/logo.svg';

const Main = () => {
  return (
    <>
      <MainContainer>
        <Main_Logo src={Logo} />

        <MainContainer_box_tittle>
          <Main_Title>
            <h1 className="titulo">HELPER</h1>
            <h2 className="subtitulo">Ajude como pode</h2>
            <h2 className="subtitulo">com que pode</h2>
          </Main_Title>
        </MainContainer_box_tittle>

        <MainContainer_box_button>
          <Button as="button" type="submit" onClick={() => alert('click')}>
            Contribuir
          </Button>
        </MainContainer_box_button>

        <MainContainer_arrowDown>
          <ArrowDown title={'Arrow down'} />
        </MainContainer_arrowDown>
      </MainContainer>
    </>
  );
};

export default Main;
