import React, { useState } from "react";

export const useBoolean = ( initialValue = true ) => {

    const [isTrue, setIsTrue] = useState(initialValue);

    const setTrue = () => setIsTrue(true);
    const setFalse = () => setIsTrue(false);

    const toggle = () => setIsTrue( ( prev ) => !prev );

    console.log( 'form custom', isTrue )

    return {

        isTrue,
        setIsTrue,
        
        toggle
    }
}