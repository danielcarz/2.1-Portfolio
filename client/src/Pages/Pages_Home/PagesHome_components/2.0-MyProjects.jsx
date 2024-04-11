import React, { useContext} from "react";

//contex
import { Contex } from "../../../Hooks/Contex/CreateContext";


//child Component
import { ChildMyProjectCards } from './2.1-ChildMyProjectCards';

//styles
import '../../../Sass/SassComponents/SassParentsComponents/2.0-MyProjects.scss';

export const MyProjects = () => {

    const { t } = useContext( Contex );

    return(
        <section className="myProjectsContainer">

            <h1> { t( "recentProject.recent-project"  ) } </h1>
            
            <ChildMyProjectCards></ChildMyProjectCards>
            
        </section>
    )
} 