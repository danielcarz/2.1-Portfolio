import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//styles
import '../../Sass/SassComponents/UiComponents/Navbar.scss';

export const Navbar = () => {

   const { linkedinImage, gitHubImage, cvImage, curriculumVitae, /* dc, */ dIcon, cIcon,   lightDark,   isTrue, setIsTrue, toggle  } = useContext( Contex );

    

   const  changeColorInterface = () => {
        
    if( isTrue ){
        toggle();

    }else{

        toggle();
    }
    
   }

    return (
        <nav className='navbar' >

            <Link className= 'logoContainer'to= "/" >
                 
                 <figure className='wrapperLogo'>
 
                    <img src= { dIcon } alt="logo" />
                    <img src= { cIcon } alt="logo" />  
                     
                     
                </figure>

                <p> <b> DaniCode  </b> </p> 

            </Link> 

        {/*    
            <Link onClick={ changeColorInterface } to= "/" >
                 
                 <figure className = ' '>

                     <img src= { lightDark } alt="logo" /> 
                     
                     
                </figure>
                
 
            </Link>  */}
    
            <div className='social-Wrapper'>

                <button onClick={ changeColorInterface } className='buttonMode' > <img src= { lightDark } alt="" /> </button>
 
                <figure className='socialEmoticon-wrapper' >

                    <a  target="_blank" rel="noopener noreferrer"  href='https://github.com/danielcarz'>  <img src= { gitHubImage } alt="d icon"/> </a>
                    
                    <a  target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/daniel-carmona-zapata-4961a9209/'>  <img src= { linkedinImage } alt="git hub emoticon" /> </a>

                    <a  target="_blank" rel="noopener noreferrer"  href=  { curriculumVitae }>  <img src= { cvImage } alt="git hub emoticon" /> </a>
                </figure>

                
            </div>
        </nav>
    )
}