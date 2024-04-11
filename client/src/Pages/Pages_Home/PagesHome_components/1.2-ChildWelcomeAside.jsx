import React from "react";

//styles
import '../../../Sass/SassComponents/SassChildComponents/1.2-ChildWelcomeAside.scss';

//ui Components
import { CarouselUI } from '../../../GeneralComponents/UiComponentes/index';

export const ChildWelcomeAside = () => { 


    return(
        <section className="welcomeAsideWrapper" >
            
            <CarouselUI></CarouselUI>
             
        </section>
    )
}