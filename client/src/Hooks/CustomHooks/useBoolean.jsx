import React, { useState } from "react";

export const useBoolean = ( initialValue = true ) => {

    const [isTrue, setIsTrue] = useState(initialValue);
   // const [isSpanish, setIsSpanish] = useState(initialValue);

    const setTrue = () => setIsTrue(true);
    const setFalse = () => setIsTrue(false);

    const toggle = () => setIsTrue( ( prev ) => !prev );
    const toggleLanguage = () => setIsSpanish( ( prev ) => !prev );

        //console.log( 'is spanish', isSpanish )
        //console.log( 'lighMode', isTrue )

    return {

        //boolean value
        isTrue,
        setIsTrue,

        //language mode
        //isSpanish,
        //setIsSpanish, 
        
        
        toggle,
        toggleLanguage,
    }
}