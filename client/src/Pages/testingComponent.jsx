import React, { useContext } from 'react';

import { Contex } from '../Hooks/Contex/CreateContext';

//import { useTranslation } from 'react-i18next';

export const TestingComponent = () => {
 
    
    
    const { toggle, isTrue, t, i18n  } = useContext( Contex );

    return(

        <>
            <h1> Testing Component </h1>

            <h1> { t( "sectionTwo.section-two" ) }</h1>

            <button onClick={ 

                () => { 
                    toggle() 

                    if( isTrue ){
                        i18n.changeLanguage("en")
                    }else{
                        i18n.changeLanguage("es")
                    }

                } }

            >ES </button> */
        
        </>
    )
}