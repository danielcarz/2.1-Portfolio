import React from "react";

import {  Routes, Route, } from "react-router-dom";

//context
import { ContextProvider } from '../Hooks/Contex/ProviderContext'; 

//pages
import { PageHome } from '../Pages/index'; 

export const AppRoutes = () => {

    return (
        <ContextProvider>
            
            <Routes>
                <Route path="/" element= { <PageHome></PageHome> }></Route>

            </Routes>
        
        </ContextProvider>
    )
}