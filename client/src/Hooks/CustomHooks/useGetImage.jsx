//projects
import weatherApp from '../../public/assets/ImagesProjects/weatherApp.png';
 
//social Media
import gitHubImage from  '../../public/assets/SocialMedia/gitHub.png';
import linkedinImage from '../../public/assets/SocialMedia/linkedin.png';
import gmailImage from '../../public/assets/SocialMedia/gmail.png';
import cvImage from '../../public/assets/SocialMedia/cv.png';
import whatsappImage  from '../../public/assets/SocialMedia/whatsapp.png';

//cv
import curriculumVitae from '../../public/assets/SocialMedia/CV_ENGL_LETTER_4.1.pdf';
 

//carousel
import nodeImage from '../../public/assets/carouselImages/nodejs.png';
import maintenanceImage from '../../public/assets/carouselImages/maintence.gif';
import giftResponsive from '../../public/assets/responsive-design.gif';

//navbar
import dIcon from '../../public/assets/letter-d.png'
import cIcon from '../../public/assets/letter-c.png'; 
import dc from '../../public/assets/dc.png';
import lightDark from '../../public/assets/lightDarkMode.png';

//habilities
import bootstrapIcon from '../../public/assets/technologyIcons/bootstrap.png';
import csspIcon from '../../public/assets/technologyIcons/css.png';
import gitHubIcon from '../../public/assets/technologyIcons/github.png';
import jspIcon from '../../public/assets/technologyIcons/js.png';
import mysqlpIcon from '../../public/assets/technologyIcons/mysql.png';
import nodepIcon from '../../public/assets/technologyIcons/nodejs.png';
import reactpIcon from '../../public/assets/technologyIcons/react.png';

//language mode
import esIcon from '../../public/assets/SocialMedia/spain.png';
import enIcon from '../../public/assets/SocialMedia/english.png';
 
 
export const useGetImage = () => {  

    return {        //projects
       weatherImage: weatherApp,

       //social media 
       linkedinImage,
       gitHubImage,
       gmailImage, 
       cvImage,
       whatsappImage,

       //carousel
       nodeImage,
       maintenanceImage,
       giftResponsive,

       //cv 
       curriculumVitae,

       //navbar
       dIcon,
       cIcon,
       dc,
       lightDark, 

       //habilities
       bootstrapIcon,
       csspIcon,
       gitHubIcon,
       jspIcon,
       mysqlpIcon,
       nodepIcon,
       reactpIcon,

       //languages
       esIcon,
       enIcon 




    };
} 