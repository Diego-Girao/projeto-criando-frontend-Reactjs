import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import Lojas from './Pages/lojas';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
            <Route 
                path="/lojas" 
                element={<Lojas />}
            />
                
        </Routes>
    )
}

export default MainRoutes;
