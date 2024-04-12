import React, { useContext } from "react";

import { Contex } from '../../../Hooks/Contex/CreateContext';

//UI components
import { EmailSystem } from '../../../GeneralComponents/UiComponentes/index';
  

//sass
import '../../../Sass/SassComponents/SassParentsComponents/3.0-Footer.scss';

export const Footer = () => {  
    
    const { gitHubImage, linkedinImage, whatsappImage, cvImage, curriculumVitae, t } = useContext( Contex );

    return(
       <footer className="footerContainer">

            <section className="footerWrapper one" >

                <div className="wrapperInfo" >
                    <h2 className="footerTitle"> { t( "footerMessage.footer-mjs"  ) } </h2>
 
                </div> 

                
            </section>

           <section  className="footerWrapper two"  >
               

                <EmailSystem></EmailSystem>

            
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