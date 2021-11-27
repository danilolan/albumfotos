import React from 'react';

//---Styles---
import './app.scss';

//---Others---
import { BrowserRouter } from 'react-router-dom'
import Routes from '../services/Routes'

//---Components---
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


function App() {

  return(
  <BrowserRouter>
    <div className="app">
        <Header/>
        <Routes/>
        <Footer/>
      </div>
  </BrowserRouter>   
  );
}

export default App;
