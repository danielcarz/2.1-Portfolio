import React, { useContext } from "react";

//contex
import { Contex } from "../../../Hooks/Contex/CreateContext";

//styles
import '../../../Sass/SassComponents/SassChildComponents/1.1-ChildWelcomeInfo.scss';

export const ChildWelcomeInfo = () => {

    const { t } = useContext( Contex );

    return(
        
        <section className="welcomeInfoWrapper" >

            <h1 className="tittle" > { t(  "welcome.welcome" ) } </h1>

            <p>

                { t ( "personalIntroduction.personal-introduction" ) }
                  
            </p>
            
        </section>
    )
}