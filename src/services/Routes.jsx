import React from 'react';
import {Routes, Route} from 'react-router'

//---Pages---
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';

function routes() {
    return ( 
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/community' element={<h1>community</h1>}/>
        <Route path='/support' element={<h1>suppport</h1>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes> );
}

export default routes;