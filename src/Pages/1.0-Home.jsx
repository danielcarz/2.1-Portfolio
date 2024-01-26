import React from "react";

// components
import { Welcome } from '../Components/ParentsComponents'; //parents components
import { Navbar } from "../Components/UiComponentes/Navbar";

//styles
import '../Sass/SassPages/1.0-Home.scss';

export const PageHome = () => {

    return(

        <div className="Pageone" >
            <Navbar></Navbar>
            <Welcome></Welcome>
        </div>
    )
}