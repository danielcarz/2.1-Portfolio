import React, { useState } from "react";

// components

import { Navbar } from "../Components/UiComponentes/Navbar";
import { Welcome, MyProjects, Habilities, Footer } from '../Components/ParentsComponents'; //parents components

//styles
import '../Sass/SassPages/1.0-Home.scss';

export const PageHome = () => {

    const [isButtonPressed, setIsButtonPressed] = useState(false);
    console.log( isButtonPressed );

    const handleButtonClick = () => {
        console.log(' executed')

        if( isButtonPressed ){
            setIsButtonPressed((prevState) => !prevState);

        }else{
            setIsButtonPressed((prevState) => !prevState);
        }
    };

    return(

        <div className= { ( isButtonPressed ) ? 'darkMode' : 'whiteMode' } >

            <Navbar></Navbar>
 
            <Welcome></Welcome>

            <MyProjects></MyProjects>

            <Habilities></Habilities>
 
            <Footer></Footer>

            <button onClick={  handleButtonClick }>click !</button>
        </div>
    )
}