import React, { useState } from "react";

export const useChangeLanguage = ( initialValue = true ) => {

    
    const [isSpanish, setIsSpanish] = useState( initialValue );
    //const [ isconLanguage, setIconLanguage ] = useState ( esIcon );

    console.log( "isSpanish" , isSpanish );

    //let iconLanguage = enIcon;

    
    const toggleLanguage = () => {

        setIsSpanish( ( prev ) => !prev ); 

           
    /*     setIconLanguage(isSpanish ? enIcon : esIcon);

        console.log( 'icon is', isconLanguage );        */ 
    
    
    };

    console.log( isSpanish )
   
  

    return {


        //language mode 
        isSpanish,
        setIsSpanish,
        
        //icon language
        //iconLanguage,
        
        
        //togle
        toggleLanguage,
    }
}