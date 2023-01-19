import React, {useState} from 'react';
import './App.css';

//criação de rotas
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Header from './components/Header';
import Footer from './components/Footer';

//usando useState para login
import Login from './pages/Login';

function App() {

  const [user, setUser] = useState(null);

  if (user == null){
    return (
      <Login/>
    );
  }


  return(
    <BrowserRouter>
      <Header/>

      <Routes/>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
