import React from "react";

//childs componentes
import { ChildWelcomeInfo, ChildWelcomeAside } from '../../../Components/ParentsComponents/ChildsComponents/index';

//styles
import '../../../Sass/SassComponents/SassParentsComponents/1.0-Welcome.scss';


export const Welcome = () => {


    return(
        <section className="welcomeInfoContainer" > 

            <ChildWelcomeInfo></ChildWelcomeInfo>
            
            <ChildWelcomeAside></ChildWelcomeAside>
  
        </section>
    )
}