import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import AddProduct from './pages/AddProduct/AddProduct';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AddProduct />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
