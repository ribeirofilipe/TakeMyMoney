import React from 'react';

import GlobalStyled from './styles/global';

import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyled />
    </>
  );
}

export default App;
