import React from 'react';
import {Routes, Route, Navigate} from 'react-router'

function routes() {
    return ( 
    <Routes>
        <Route exact path='/' element={<h1>home</h1>}/>
        <Route path='/search' element={<h1>search</h1>}/>
        <Route path='/community' element={<h1>community</h1>}/>
        <Route path='/support' element={<h1>suppport</h1>}/>
        <Route path='/home' element={<h1>home</h1>}/>
    </Routes> );
}

export default routes;