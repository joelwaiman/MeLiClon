import './App.css';
import React, { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Components/Header/Header';
import ContainerMain from './Components/Containers/ContainerFetch/ContainerMain';
import { CustomProvide } from './CustomContext';
import ItemDetail from './Components/Containers/ContainerFetch/ItemDetail';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <CustomProvide>
          <Header />
          <Routes>
            <Route path="/" element={<ContainerMain />}/>
            <Route path="/categoria/:id" element={<ContainerMain />}/>
            <Route path="/products/:idItem" element= {<ItemDetail />}/>
          </Routes>
        </CustomProvide>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
