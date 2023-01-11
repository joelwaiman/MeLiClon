import './App.css';
import React, { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom"
import Header from './Components/Header/Header';
import ContainerMain from './Components/Containers/ContainerMain/ContainerMain';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <ContainerMain />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
