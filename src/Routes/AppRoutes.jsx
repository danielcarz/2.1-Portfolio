import React from "react";

import {  Routes, Route, } from "react-router-dom";

//pages
import { PageHome } from '../Pages/index';

export const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element= { <PageHome></PageHome> }></Route>

            </Routes>
        
        </>
    )
}