import React, { useContext } from 'react';

import Carousel from 'react-bootstrap/Carousel';

//context
import { Contex } from '../../Hooks/Contex/CreateContext';


//styles
import '../../Sass/SassComponents/UiComponents/Carousel.scss';



export const  CarouselUI =  () =>  {

    const { nodeImage, maintenanceImage, giftResponsive, t } = useContext( Contex );
 

    return (  
     
        

        <Carousel data-bs-theme="dark" data-bs-ride="carousel" className="carouselContainer carousel slide w-100 h-100 mx-0 d-flex align-items-center">
          
           


            <Carousel.Item className="custom-carousel-item">
              
              <figure  className="figureWrapper"> 

                <img
                    className="image"
                    style={{ width: '130px', height: '130px' }} 
                    src= { giftResponsive } 
                    alt="First slide"
                  /> 

                 

              </figure>

              

              <div className="aboutTech">

                <h5>  { t( "cardOneTitle.card-one-title" ) } </h5>

                <p> 
                    { t( "cardOneText.cardOne-Text" ) }
                    
                </p>

              </div> 


              

            </Carousel.Item>

            <Carousel.Item className="custom-carousel-item">
              
              <figure  className="figureWrapper"> 

               <img
                  className="image"
                  style={{ width: '130px', height: '130px' }} 
                  src= { nodeImage } 
                  alt="First slide"
                /> 

                 

              </figure>

              

              <div className="aboutTech">

                <h5> { t( "cardTwoTitle.cardTwo-title" ) } </h5>

                <p> 
                  { t( "cardTwoText.cardTwo-text"  ) }
                </p>

              </div> 


              

            </Carousel.Item>

            <Carousel.Item className="custom-carousel-item">
              
              <figure  className="figureWrapper"> 

               <img
                  className="image"
                  style={{ width: '130px', height: '130px' }} 
                  src= { maintenanceImage } 
                  alt="First slide"
                /> 

                 

              </figure>

              

              <div className="aboutTech">

                <h5> { t( "cardThreeTitle.cardThree-title"  ) } </h5>

                <p> 
                   { t(  "cardThreeText.cardThree-text" ) }
                </p>

              </div> 


              

            </Carousel.Item>

        </Carousel>


     
      
    


  
);
}

