import React, { useContext } from "react";

//Contex
import { Contex } from '../../../Hooks/Contex/CreateContext';
 

//sass 
import '../../../Sass/SassComponents/SassParentsComponents/4.0-Habilities.scss';

export const Habilities = () => {  
    
    const {  bootstrapIcon, csspIcon, gitHubIcon, jspIcon, mysqlpIcon, nodepIcon, reactpIcon } = useContext( Contex );

    return( 

    <section className="iconsContainer" >
        
        <h2> Habilidades: </h2>

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