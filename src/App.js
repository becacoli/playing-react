import React from 'react';
import './App.css';

//criação de rotas
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return(
    <BrowserRouter>
      <Header/>

      <Routes/>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
