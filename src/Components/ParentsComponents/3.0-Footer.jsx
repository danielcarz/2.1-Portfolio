import React, { } from "react";


//sass
import '../../Sass/SassComponents/SassParentsComponents/3.0-Footer.scss';

export const Footer = () => {  
 

    return(
       <footer className="footerContainer">
            <section className="footerWrapper one" >

                <div className="wrapperInfo" >
                    <h1>tittle footer</h1>

                    <div className="wrapperTitle" >
                        <h3>tittle 2</h3>
                        <p>lorem basic</p>    

                    </div>
 
                    
                </div> 

                
            </section>

            <section  className="footerWrapper two"  >

                <div className="wrapperSocialInfo">
                    
                    <section className="socialInfo" >
                        <h2>title two</h2>
                        <p> lorem two </p>
                    </section>
                    
                    <section className="socialInfo" >
                        <h2>title two</h2>
                        <p> lorem two </p>
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