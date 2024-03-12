import React from "react";

//styles
import '../../Sass/SassComponents/UiComponents/Cards.scss';

//images
import giftSmartPhone from '../../public/assets/smartphone.gif'

export const CardUI = ( 
    { 
        //weather Aplication
        weatherImage, 
        weatherTittle,
    
    
    } ) => {


    return(

        <section className="cardsWrapper" >


            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src = { weatherImage } alt="Descripción de la imagen" />
                    </div>
                    <div className="card-back">
                        Descripción de la tarjeta
                        <button className="WebButton" > <a target="_blank" rel="noopener noreferrer" href="https://weather-aplication-six.vercel.app/"> Visitar sitio web </a>  </button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src = { weatherImage } alt="Descripción de la imagen" />
                    </div>
                    <div className="card-back">
                        Descripción de la tarjeta
                        <button className="WebButton" > <a target="_blank" rel="noopener noreferrer" href="https://weather-aplication-six.vercel.app/"> Visitar sitio web </a>  </button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src = { weatherImage } alt="Descripción de la imagen" />
                    </div>
                    <div className="card-back">
                        Descripción de la tarjeta
                        <button className="WebButton" > <a target="_blank" rel="noopener noreferrer" href="https://weather-aplication-six.vercel.app/"> Visitar sitio web </a>  </button>
                    </div>
                </div>
            </div>

            


        </section>
        

            
       
    )
} 