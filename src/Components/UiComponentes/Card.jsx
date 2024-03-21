import React from "react";

//styles
import '../../Sass/SassComponents/UiComponents/Cards.scss';



export const CardUI = ( 
    
    { 
        //weather Aplication
        weatherImage, 
        weatherTittle,
    
     
    } ) => {


    return(

        <section className="cardsWrapper" >

            <div  className="wrapperProject">

                <div className="wrapperTittleProject" >

                    <a target="_blank" rel="noopener noreferrer" href="https://weather-aplication-six.vercel.app/">  <h2> Weather Application </h2>  </a>  
                    
                </div>

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

            </div>

                       


        </section>
        

            
       
    )
} 