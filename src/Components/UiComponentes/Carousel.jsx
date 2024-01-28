import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';



export const  CarouselUI =  () =>  {
    return (
    
        

        <Carousel data-bs-theme="dark"  className="carouselContainer w-25">
          
           

            <Carousel.Item className="custom-carousel-item">
              
              <figure  className="figureWrapper">

                <img
                  className="image"
                  style={{ width: '100px', height: '100px' }}
                 /*  src= { gifResponsive } */
                  alt="First slide"
                />

            
              
                <Carousel.Caption className="aboutTech">
                  <h5>First slide label</h5>
                  <p>Garantizo experiencias óptimas en todos los dispositivos, ofreciendo consistencia y accesibilidad para cada usuario.</p>
                </Carousel.Caption>
              </figure>
            </Carousel.Item>

            <Carousel.Item className="custom-carousel-item">
              <figure  className="figureWrapper">

                  <img
                    className="image"
                    style={{ width: '100px', height: '100px' }}
                   /*  src= { gifResponsive } */
                    alt="First slide"
                  />

            
              
                  <Carousel.Caption className="aboutTech">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </figure>
            </Carousel.Item>

          

      
        </Carousel>


     
      
    


  
);
}

