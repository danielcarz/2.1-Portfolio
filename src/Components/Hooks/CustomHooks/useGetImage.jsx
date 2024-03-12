//projects
import weatherApp from '../../../public/assets/ImagesProjects/weatherApp.png';

//social Media
import gitHubImage from  '../../../public/assets/SocialMedia/gitHub.png';
import linkedinImage from '../../../public/assets/SocialMedia/linkedin.png';
import gmailImage from '../../../public/assets/SocialMedia/gmail.png';
import cvImage from '../../../public/assets/SocialMedia/cv.png'; 

//cv
import curriculumVitae from '../../../public/assets/SocialMedia/CV_ESP_0.2.pdf';


//carousel
import nodeImage from '../../../public/assets/carouselImages/nodejs.png';

 
export const useGetImage = () => { 

    return {
        //projects
       weatherImage: weatherApp,

       //social media 
       linkedinImage,
       gitHubImage,
       gmailImage,
       cvImage,

       //carousel
       nodeImage,

       //cv 
       curriculumVitae

    };
} 