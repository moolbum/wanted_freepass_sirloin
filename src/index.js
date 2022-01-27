import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './pages/AddProduct/AddProduct';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AddProduct />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
