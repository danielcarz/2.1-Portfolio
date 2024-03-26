import React from "react";

// components

import { Navbar } from "../Components/UiComponentes/Navbar";
import { Welcome, MyProjects, Habilities, Footer } from '../Components/ParentsComponents'; //parents components

//styles
import '../Sass/SassPages/1.0-Home.scss';

export const PageHome = () => {

    return(

        <div className="Pageone" >
            <Navbar></Navbar>
 
            <Welcome></Welcome>

            <MyProjects></MyProjects>

            <Habilities></Habilities>
 
            <Footer></Footer>
        </div>
    )
}