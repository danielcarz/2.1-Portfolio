import React, { useContext } from "react";

//Contex
import { Contex } from '../../../Hooks/Contex/CreateContext';
 

//sass 
import '../../../Sass/SassComponents/SassParentsComponents/4.0-Habilities.scss';

export const Habilities = () => {  
<<<<<<< HEAD:client/src/Components/ParentsComponents/4.0-Habilities.jsx
     
    const {  bootstrapIcon, csspIcon, gitHubIcon, jspIcon, mysqlpIcon, nodepIcon, reactpIcon } = useContext( Contex );
=======
    
    const {  bootstrapIcon, csspIcon, gitHubIcon, jspIcon, mysqlpIcon, nodepIcon, reactpIcon, t } = useContext( Contex );
>>>>>>> testing:client/src/Pages/Pages_Home/PagesHome_components/4.0-Habilities.jsx

    return( 

    <section className="iconsContainer" >
<<<<<<< HEAD:client/src/Components/ParentsComponents/4.0-Habilities.jsx

        <h2> Habilidades: </h2>
=======
        
        <h2>  { t( "Abilities.Abilitie" ) } </h2>
>>>>>>> testing:client/src/Pages/Pages_Home/PagesHome_components/4.0-Habilities.jsx

       <section className="iconsWrapper" >

            <figure className="icon"> Bootstrap <img src= {bootstrapIcon } alt="" /> </figure>

            <figure className="icon" > css <img src= { csspIcon} alt="" />  </figure>

            <figure className="icon" > GitHub <img src= { gitHubIcon } alt="" />  </figure>

            <figure className="icon" > Javascript <img src= { jspIcon } alt="" />  </figure>
            
            <figure className="icon"> Mysql <img src= { mysqlpIcon } alt="" />  </figure>

            <figure className="icon"> NodeJS <img src= { nodepIcon } alt="" />  </figure>

            <figure className="icon"> React <img src= { reactpIcon } alt="" />  </figure>

       </section>

    </section>
    )
}  