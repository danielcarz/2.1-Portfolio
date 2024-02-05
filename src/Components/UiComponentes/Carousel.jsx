import Carousel from 'react-bootstrap/Carousel';

//assets
import giftResponsive from '../../public/assets/responsive.gif';

//styles
import '../../Sass/SassComponents/UiComponents/Carousel.scss';



export const  CarouselUI =  () =>  {
    return ( 
    
        

        <Carousel data-bs-theme="dark"  className="carouselContainer w-100 d-flex align-items-center">
          
           

            <Carousel.Item className="custom-carousel-item">
              
              <figure  className="figureWrapper">

                <img
                  className="image"
                  style={{ width: '200px', height: '200px' }} 
                  src= { giftResponsive } 
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
                    src= { giftResponsive }
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

