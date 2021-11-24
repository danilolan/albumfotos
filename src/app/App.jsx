import React from 'react';

//---Styles---
import './app.scss';

//---Others---
import api from '../services/api'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../services/Routes'

//---Components---
import Header from '../components/header/Header';


function App() {

  return(
  <BrowserRouter>
    <div className="app">
        <Header/>
        <Routes/>
      </div>
  </BrowserRouter>   
  );
}

export default App;
