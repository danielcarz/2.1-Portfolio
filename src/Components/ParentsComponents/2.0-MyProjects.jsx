import React from "react";

//child Component
import { ChildMyProjectCards } from './ChildsComponents/2.1-ChildMyProjectCards';

//styles
import '../../Sass/SassComponents/SassParentsComponents/2.0-MyProjects.scss';

export const MyProjects = () => {


    return(
        <section className="myProjectsContainer">

            <h1> Proyectos recientes </h1>
            
            <ChildMyProjectCards></ChildMyProjectCards>
            
        </section>
    )
} 