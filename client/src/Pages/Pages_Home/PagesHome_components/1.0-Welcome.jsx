import React from "react";

//childs componentes
import { ChildWelcomeInfo } from './1.1-ChildWelcomeInfo';
import { ChildWelcomeAside } from './1.2-ChildWelcomeAside';

//styles
import '../../../Sass/SASS_pages/Pages_Home/1.0-Welcome.scss';

 
export const Welcome = () => {


    return(
        <section className="welcomeInfoContainer" > 

            <ChildWelcomeInfo></ChildWelcomeInfo>
            
            <ChildWelcomeAside></ChildWelcomeAside>
  
        </section>
    )
}