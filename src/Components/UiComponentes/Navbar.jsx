import { Link, NavLink, useNavigate } from 'react-router-dom';

//images
import github from '../../public/assets/gitHub.png';
import gmail from '../../public/assets/gmail.png';
import linkedin from '../../public/assets/linkedin.png';


//styles
import '../../Sass/SassComponents/UiComponents/Navbar.scss';

export const Navbar = () => {

   
    

    return (
        <nav className='navbar' >
            <Link to= "/" > HOME </Link>

          

            <NavLink  to= "two" className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }`  }> ABOUT ME </NavLink>
            <NavLink  to= "three" className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }`  }> THREE </NavLink>

            <div className='social-Wrapper'>

                <figure className='socialEmoticon-wrapper' >                 
                    <a href='https://github.com/danielcarz'>  <img src= { github } alt="git hub emoticon" /> </a>
                    <a href='https://gamil.com'>  <img src= { gmail } alt="git hub emoticon" /> </a>
                    <a href='https://www.linkedin.com/in/daniel-carmona-zapata-4961a9209/'>  <img src= { linkedin } alt="git hub emoticon" /> </a>
                </figure>

                
            </div>
        </nav>
    )
}