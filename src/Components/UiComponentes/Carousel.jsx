import React, { useContext } from 'react';

import Carousel from 'react-bootstrap/Carousel';

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//assets
import giftResponsive from '../../public/assets/responsive-design.gif';
import giftSmartPhone from '../../public/assets/smartphone.gif'

//styles
import '../../Sass/SassComponents/UiComponents/Carousel.scss';



export const  CarouselUI =  () =>  {

 

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

                <h5> Experiencias óptimas para todos los dispositivos </h5>

                <p> 
                    Garantizo experiencias óptimas en todos los dispositivos, ofreciendo
                    consistencia y accesibilidad para cada usuario.
                </p>

              </div> 


              

            </Carousel.Item>

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

                <h5> Experiencias óptimas para todos los dispositivos </h5>

                <p> 
                    Garantizo experiencias óptimas en todos los dispositivos, ofreciendo
                    consistencia y accesibilidad para cada usuario.
                </p>

              </div> 


              

            </Carousel.Item>

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

                <h5> Desarrollo Backend </h5>

                <p> 
                  Desarrollador backend con Node.js experimentado en implementación de lógica de negocio y autenticación de usuarios. Especializado en mantener la seguridad y el rendimiento del servidor y la base de datos.
                </p>

              </div> 


              

            </Carousel.Item>

        </Carousel>


     
      
    


  
);
}

