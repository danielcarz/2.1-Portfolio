import React, { useContext } from "react";

import { Contex } from '../Hooks/Contex/CreateContext';
 

//sass
import '../../Sass/SassComponents/SassParentsComponents/3.0-Footer.scss';

export const Footer = () => {  
    
    const { gitHubImage, linkedinImage, whatsappImage, cvImage, curriculumVitae } = useContext( Contex );

    return(
       <footer className="footerContainer">

            <section className="footerWrapper one" >

                <div className="wrapperInfo" >
                    <h2 className="footerTitle"> ¡Garantizo el funcionamiento y la evolución de tus proyectos web!" </h2>
 
                   
 
                    
                </div> 

                
            </section>

            <section  className="footerWrapper two"  >

                <div className="wrapperSocialInfo">
                    
                    <section className="socialInfo" >
                        <h2> Gmail </h2>
                        <p> <b> dcz9412@gmail.com </b> </p>
                    </section>
                    
                    <section className="socialInfo" >
                        <h3> Curriculum </h3>

                        <p className="wrapperCv" >
                             
                            <a   className="cvIcon" target="_blank" rel="noopener noreferrer"  href=  { curriculumVitae } >  <b> Daniel Carmona Zapata: </b>    <img src= { cvImage } alt="" /> </a>
                        </p>
                    </section>

                    <section className="socialInfo" >
                        <h3 className="footerContactme"> Contáctame </h3>
                        <p> ( +57 ) 312 6626 051 </p>    

                    </section>
                
                
                
                </div> 

            
            </section>
             
            <section  className="footerWrapper three"  > 

                <div className="wrapperSocialIcon" >
                    <h3>Follow me: </h3> 

                    <figure className="wrapperIcons">

                        <a  target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/daniel-carmona-zapata-4961a9209/'>  <img src= { linkedinImage } alt="" /> </a> 

                        <a  target="_blank" rel="noopener noreferrer"   href='https://github.com/danielcarz'>  <img src = { gitHubImage } alt="" /> </a>
                        
                        <a  target="_blank" rel="noopener noreferrer"  href='https://wa.me/+573126626051'>  <img src= { whatsappImage } alt="" /> </a>

                    </figure>


                    
                </div>


            </section>
       </footer>
    )
}  