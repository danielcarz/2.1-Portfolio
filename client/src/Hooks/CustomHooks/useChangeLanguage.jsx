import React, { useState } from "react";

export const useChangeLanguage = ( initialValue = true ) => {

    
    const [isSpanish, setIsSpanish] = useState(initialValue);

    const setTrue = () => setIsTrue(true);
    const setFalse = () => setIsTrue(false);

   
    const toggleLanguage = () => setIsSpanish( ( prev ) => !prev );

        console.log( 'is spanish', isSpanish )
        //console.log( 'lighMode', isTrue )

    return {


        //language mode 
        isSpanish,
        setIsSpanish, 
        
        
     
        toggleLanguage,
    }
}