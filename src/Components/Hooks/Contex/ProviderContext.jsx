import { Contex } from "./CreateContext";

//custom hook
import { useGetImage } from '../CustomHooks/index';

export const ContextProvider = ( { children } ) => {
 
    //images Projects
    const { weatherImage, linkedinImage, gitHubImage, gmailImage, nodeImage, cvImage, curriculumVitae, maintenanceImage, giftResponsive, whatsappImage, dIcon, cIcon } = useGetImage();
   

    return(

        <Contex.Provider 
            value={

                {  
                    //images
                    weatherImage,
                    linkedinImage,
                    gitHubImage, 
                    gmailImage,
                    cvImage,
                    whatsappImage,

                    //images carousel
                    nodeImage,
                    maintenanceImage,
                    giftResponsive,

                    //images footer
                        //-gitHubImage, linkedinImage 

                    //curriculum
                    curriculumVitae,

                    //navbar
                    dIcon,
                    cIcon


                 
                } 
            
            } > 
        
            { children } 


        
        </Contex.Provider>
    )
}