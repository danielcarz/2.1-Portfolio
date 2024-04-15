import React from "react";


//styles
import '../../../Sass/SASS_pages/Pages_Home/1.2-ChildWelcomeAside.scss'

//ui Components
import { CarouselUI } from '../../../GeneralComponents/UiComponentes/index';

export const ChildWelcomeAside = () => { 

    

    return(
        <section className="welcomeAsideWrapper" >
            
            <CarouselUI></CarouselUI>
             
        </section>
    )
}