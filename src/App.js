import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import NavGrid from './components/NavGrid';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import navData from './data/navData';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 1rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <AppContainer>
      <GlobalStyles />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Main>
        <NavGrid data={navData} searchTerm={searchTerm} />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
