import React, { useContext } from "react";

//contex
import { Contex } from '../../../Hooks/Contex/CreateContext';

//ui components
import { CardUI } from '../../../GeneralComponents/UiComponentes/index'; 


//styles
import '../../../Sass/SassComponents/SassChildComponents/2.1-ChildMyProjectCards.scss';

export const ChildMyProjectCards = () => { 

    const { weatherImage } = useContext ( Contex );
    
 
    return(
        <>
        
            <CardUI 
 
                //weather Aplications
                weatherImage = { weatherImage }
                weatherTittle = { 'Aplicacion del Clima' } 
            
            
            
            ></CardUI>
        
        </>
            
       
    )
} 