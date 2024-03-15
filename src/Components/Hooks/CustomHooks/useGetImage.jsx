//projects
import weatherApp from '../../../public/assets/ImagesProjects/weatherApp.png';

//social Media
import gitHubImage from  '../../../public/assets/SocialMedia/gitHub.png';
import linkedinImage from '../../../public/assets/SocialMedia/linkedin.png';
import gmailImage from '../../../public/assets/SocialMedia/gmail.png';
import cvImage from '../../../public/assets/SocialMedia/cv.png';
import whatsappImage  from '../../../public/assets/SocialMedia/whatsapp.png';

//cv
import curriculumVitae from '../../../public/assets/SocialMedia/CV_ESP_04.pdf';


//carousel
import nodeImage from '../../../public/assets/carouselImages/nodejs.png';
import maintenanceImage from '../../../public/assets/carouselImages/maintence.gif';
import giftResponsive from '../../../public/assets/responsive-design.gif';

 
export const useGetImage = () => {  

    return {
        //projects
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
       curriculumVitae

    };
} 