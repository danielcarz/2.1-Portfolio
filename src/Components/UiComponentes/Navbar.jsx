import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

//context
import { Contex } from '../Hooks/Contex/CreateContext';

//styles
import '../../Sass/SassComponents/UiComponents/Navbar.scss';

export const Navbar = () => {

   const { linkedinImage, gitHubImage } = useContext( Contex );
    

    return (
        <nav className='navbar' >
            <Link className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` } to= "/" > HOME </Link>

          

            <NavLink  to= "two" className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }`  }> ABOUT ME </NavLink>
            <NavLink  to= "three" className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }`  }> THREE </NavLink>

            <div className='social-Wrapper'>

                <figure className='socialEmoticon-wrapper' >                 
                    <a  target="_blank" rel="noopener noreferrer"  href='https://github.com/danielcarz'>  <img src= { gitHubImage } alt="git hub emoticon" /> </a>
                    
                    <a  target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/daniel-carmona-zapata-4961a9209/'>  <img src= { linkedinImage } alt="git hub emoticon" /> </a>
                </figure>

                
            </div>
        </nav>
    )
}