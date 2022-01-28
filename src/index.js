import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
