import React from "react";

//styles
import '../../Sass/SassComponents/UiComponents/Cards.scss';

//images
import giftSmartPhone from '../../public/assets/smartphone.gif'

export const CardUI = () => {


    return(
        
            <figure className="card">
                <img
                    src={ giftSmartPhone }
                    alt="image_project"
                
                >
                    
                </img>
            </figure>
       
    )
} 