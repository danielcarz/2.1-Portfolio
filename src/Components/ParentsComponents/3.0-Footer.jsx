import React, { } from "react";


//sass
import '../../Sass/SassComponents/SassParentsComponents/3.0-Footer.scss';

export const Footer = () => {  
 

    return(
       <footer className="footerContainer">

            <section className="footerWrapper one" >

                <div className="wrapperInfo" >
                    <h2 className="footerTitle"> ¡Garantizo el funcionamiento y la evolución de tus proyectos web!" </h2>
 
                    <div className="wrapperTitle" >
                        <h3 className="footerContactme"> Contáctame </h3>
                        <p> ( +57 ) 312 6626 051 </p>    

                    </div>
 
                    
                </div> 

                
            </section>

            <section  className="footerWrapper two"  >

                <div className="wrapperSocialInfo">
                    
                    <section className="socialInfo" >
                        <h2> Gmail </h2>
                        <p> <b> dcz9412@gmail.com </b> </p>
                    </section>
                    
                    <section className="socialInfo" >
                        <h2> linkedin </h2>

                        <p>
                            <b> Daniel Carmona Zapata: </b>    
                            <a  target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/daniel-carmona-zapata-4961a9209/'> Linkedin profile </a>
                        </p>
                    </section>
                
                
                
                </div> 

            
            </section>
             
            <section  className="footerWrapper three"  > 

                <div className="wrapperSocialIcon" >
                    <h3>Follow</h3>

                    <figure className="wrapperIcons">

                        <a  target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/daniel-carmona-zapata-4961a9209/'>  icon1 </a>

                        <a  target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/daniel-carmona-zapata-4961a9209/'>  icon2 </a>
                        
                        <a  target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/daniel-carmona-zapata-4961a9209/'>  icon3 </a>

                    </figure>


                    
                </div>


            </section>
       </footer>
    )
}  