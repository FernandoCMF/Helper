import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/main/Main';
import Descripton from 'pages/descripton/Descripton';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
      <Descripton />
    </div>
  );
};

export default App;
