import React from "react";

//childs componentes
import { ChildWelcomeInfo, ChildWelcomeAside } from './ChildsComponents/index';

//styles


export const Welcome = () => {


    return(
        <section className="welcomeInfoWrapper" > 

            <ChildWelcomeInfo></ChildWelcomeInfo>
            <ChildWelcomeAside></ChildWelcomeAside>

        </section>
    )
}