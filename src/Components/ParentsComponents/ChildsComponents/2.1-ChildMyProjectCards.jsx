import React, { useContext } from "react";

//contex
import { Contex } from '../../Hooks/Contex/CreateContext';

//ui components
import { CardUI } from '../../UiComponentes/Card';


//styles
import '../../../Sass/SassComponents/SassChildComponents/2.1-ChildMyProjectCards.scss';

export const ChildMyProjectCards = () => { 

    const { weatherImage } = useContext ( Contex );
    console.log( weatherImage )

    return(
        <>
        
            <CardUI weatherImage = { weatherImage } ></CardUI>
        
        </>
            
       
    )
} 