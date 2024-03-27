import React, { useState } from "react";

export const useBoolean = ( initialValue = false ) => {

    const [isTrue, setIsTrue] = useState(initialValue);

    const setTrue = () => setIsTrue(true);
    const setFalse = () => setIsTrue(false);

    const toggle = () => setIsTrue( ( prev ) => !prev );

    return {

        isTrue,
        setIsTrue,
        
        toggle
    }
}