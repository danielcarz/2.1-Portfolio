import { Contex } from "./CreateContext";

//custom hook
import { useGetImage, useBoolean } from '../CustomHooks/index';



export const ContextProvider = ( { children } ) => {
    
    //boolean
    const { isTrue, setIsTrue, toggle } = useBoolean();


    //images Projects
    const { 
            weatherImage,

            linkedinImage,

            gitHubImage, 

            gmailImage,

            nodeImage, 

            cvImage,

            curriculumVitae,

            maintenanceImage,

            giftResponsive, 

            whatsappImage,

            dIcon,

            cIcon,

            dc,

            lightDark, 
            
            //technology icons
            bootstrapIcon,
            csspIcon,
            gitHubIcon,  
            jspIcon,
            mysqlpIcon,
            nodepIcon,
            reactpIcon, } = useGetImage();
   


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
                    cIcon,
                    dc,
                    lightDark, 

                    //habilities icons
                    bootstrapIcon,
                    csspIcon,
                    gitHubIcon,
                    jspIcon,
                    mysqlpIcon,
                    nodepIcon,
                    reactpIcon,

                    isTrue, 
                    setIsTrue,
                    toggle 



                 
                } 
            
            } > 
        
            { children } 


        
        </Contex.Provider>
    )
}