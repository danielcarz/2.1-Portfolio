import { Contex } from "./CreateContext";

//custom hook
import { useGetImage } from '../CustomHooks/index';

export const ContextProvider = ( { children } ) => {
 
    //images Projects
    const { weatherImage, linkedinImage, gitHubImage, gmailImage, nodeImage, cvImage, curriculumVitae, maintenanceImage, giftResponsive } = useGetImage();
   

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

                    //images carousel
                    nodeImage,
                    maintenanceImage,
                    giftResponsive,

                    //curriculum
                    curriculumVitae,


                 
                } 
            
            } > 
        
            { children } 


        
        </Contex.Provider>
    )
}