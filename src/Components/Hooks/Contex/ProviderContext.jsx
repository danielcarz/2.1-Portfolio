import { Contex } from "./CreateContext";

//custom hook
import { useGetImage } from '../CustomHooks/index';

export const ContextProvider = ( { children } ) => {

    //images Projects
    const { weatherImage, linkedinImage, gitHubImage, gmailImage} = useGetImage();
   

    return(

        <Contex.Provider 
            value={

                {  
                    //images
                    weatherImage,
                    linkedinImage,
                    gitHubImage,
                    gmailImage
                 
                } 
            
            } > 
        
            { children } 


        
        </Contex.Provider>
    )
}