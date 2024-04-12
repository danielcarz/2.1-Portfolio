import React from "react";

import {  Routes, Route, } from "react-router-dom";

//context
import { ContextProvider } from '../Hooks/Contex/ProviderContext'; 

//pages
import { PageHome, TestingComponent } from '../Pages/index'; 

export const AppRoutes = () => {

    return (
        <ContextProvider>
            
            <Routes>
                <Route path="/" element= { <PageHome></PageHome> }></Route>
                <Route path="/test" element= { <TestingComponent> </TestingComponent> }></Route>

            </Routes>
        
        </ContextProvider>
    )
}