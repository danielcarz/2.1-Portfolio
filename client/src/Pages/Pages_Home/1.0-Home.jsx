import React, { useState, useContext } from "react";

//context
import { Contex } from "../../Components/Hooks/Contex/CreateContext";

// components

import { Navbar } from "../../Components/UiComponentes/Navbar";
import { Welcome, MyProjects, Habilities, Footer } from './PagesHome_components/index'; //parents components

//styles
import '../../Sass/SassPages/1.0-Home.scss';

export const PageHome = () => {

    const { isTrue } = useContext( Contex );
    console.log( isTrue )



    return(

        <div className= { ( isTrue ) ? 'darkMode' : 'whiteMode' } >

            <Navbar></Navbar>
 
            <Welcome></Welcome> 

            <MyProjects></MyProjects>

            <Habilities></Habilities>
 
            <Footer></Footer>

           
        </div>
    )
}