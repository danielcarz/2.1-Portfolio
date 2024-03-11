import React from "react";

//styles
import '../../Sass/SassComponents/UiComponents/Cards.scss';

//images
import giftSmartPhone from '../../public/assets/smartphone.gif'

export const CardUI = ( { weatherImage } ) => {


    return(

        <section className="cardsWrapper" >


            <figure className="card">
                <img
                    src={ weatherImage }
                    alt="image_project"
                
                >
                    
                </img>

                <section>
                    <h2>tittle project</h2>
                    <p>subtittle project</p>
                </section>
            </figure>

            <figure className="card">
                <img
                    src={ giftSmartPhone }
                    alt="image_project"
                
                >
                    
                </img>

                <section>
                    <h2>tittle project</h2>
                    <p>subtittle project</p>
                </section>
            </figure>

            <figure className="card">
                <img
                    src={ giftSmartPhone }
                    alt="image_project"
                
                >
                    
                </img>

                <section>
                    <h2>tittle project</h2>
                    <p>subtittle project</p>
                </section>
            </figure>

            <figure className="card">
                <img
                    src={ giftSmartPhone }
                    alt="image_project"
                
                >
                    
                </img>

                <section>
                    <h2>tittle project</h2>
                    <p>subtittle project</p>
                </section>
            </figure>

            <figure className="card">
                <img
                    src={ giftSmartPhone }
                    alt="image_project"
                
                >
                    
                </img>

                <section>
                    <h2>tittle project</h2>
                    <p>subtittle project</p>
                </section>
            </figure>

            <figure className="card">
                <img
                    src={ giftSmartPhone }
                    alt="image_project"
                
                >
                    
                </img>

                <section>
                    <h2>tittle project</h2>
                    <p>subtittle project</p>
                </section>
            </figure>


        </section>
        

            
       
    )
} 