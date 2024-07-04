import React from 'react';
import Registration from './sample.jsx';
import Login from './login.jsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './Header.jsx';
export default function Sample(){
    return(
        <>
        
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Registration />}/>
        

        </Routes>
        </BrowserRouter>
        </>
    );
}