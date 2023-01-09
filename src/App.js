import './App.css';
import React, { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom"
import Header from './Components/Header/Header';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
