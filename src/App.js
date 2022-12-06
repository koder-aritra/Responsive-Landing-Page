import React from 'react';
import { StyledContainer } from './components/styles/Container.styled';
import Header from './components/Header';
import Card from './components/Card';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Content from './content';
import Footer from './components/Footer';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <StyledContainer>
          {
            Content.map((item, index) => (
              <Card key={index} item={item} />
            ))
          }
        </StyledContainer>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
