import React from "react";


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

            <section  className="footerWrapper two"  > f2 </section>
            <section  className="footerWrapper three"  > f3 </section>
       </footer>
    )
}  