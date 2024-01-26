import React from "react";

//parents components
import { Welcome } from '../Components/ParentsComponents';

//styles
import '../Sass/SassPages/1.0-Home.scss';

export const PageHome = () => {

    return(

        <div className="Pageone" >
            <Welcome></Welcome>
        </div>
    )
}