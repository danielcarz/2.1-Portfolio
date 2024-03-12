//projects
import weatherApp from '../../../public/assets/ImagesProjects/weatherApp.png';

//social Media
import gitHubImage from  '../../../public/assets/SocialMedia/gitHub.png';
import linkedinImage from '../../../public/assets/SocialMedia/linkedin.png';
import gmailImage from '../../../public/assets/SocialMedia/gmail.png';


 
export const useGetImage = () => {

    return {
        //projects
       weatherImage: weatherApp,

       //social media 
       linkedinImage,
       gitHubImage,
       gmailImage

    };
} 