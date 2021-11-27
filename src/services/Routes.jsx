import React from 'react';
import {Routes, Route} from 'react-router'

//---Pages---
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import Community from '../pages/community/Community';
import Support from '../pages/support/Support';

function routes() {
    return ( 
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes> );
}

export default routes;