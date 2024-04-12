import React, { useContext } from "react";

//context
import { Contex } from '../../Hooks/Contex/CreateContext';

//styles
import '../../Sass/SassComponents/UiComponents/Cards.scss';



export const CardUI = ( 
    
    
    
    { 
        //weather Aplication
        weatherImage, 
        weatherTittle,
    
     
    } ) => {

    const { t } = useContext( Contex );


    return(

        <section className="cardsWrapper" >
 
            <div  className="wrapperProject">

                <div className="wrapperTittleProject" >

                    <a target="_blank" rel="noopener noreferrer" href="https://weather-aplication-six.vercel.app/">  <h2> Aplicacion del Clima </h2>  </a>  
                    
                </div>
 

                <div className="aboutProject" >
                    
                    <div className="card">
                       
                        <div className="card-inner">

                            <div className="card-front">
                                <img src = { weatherImage } alt="Descripción de la imagen" />
                            </div>

                            <div className="card-back">
    

                                <button className="WebButton" > <a target="_blank" rel="noopener noreferrer" href="https://weather-aplication-six.vercel.app/"> Visitar sitio web </a>  </button>

                                <button className="WebButton" > <a target="_blank" rel="noopener noreferrer" href="https://github.com/danielcarz/Weather-Aplication"> Ver codigo en gitHub </a>  </button>
                            
                            </div>

                        </div>

                    </div>

                    <div className="aboutProjectList">
                        
                        <h2 className="aboutTitleProject" > { t( "aboutProject.about-project"  ) } </h2>
                        <ul>
                            <li> { t( "cleanCode.clean-code"  ) } </li>
                            <li> { t( "weatherApp.weatherApp" ) } </li>
                            <li> { t(  "reactHook.react-hook" ) } </li>
                        </ul>
                    </div>

                </div>

            </div>

                       


        </section>
        

            
       
    )
} 