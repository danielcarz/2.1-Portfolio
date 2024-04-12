import { Contex } from "./CreateContext";

//custom hook
import { useGetImage, useBoolean, useChangeLanguage } from '../CustomHooks/index';

//translation
import { useTranslation } from 'react-i18next';



export const ContextProvider = ( { children } ) => {


    
    //boolean
    const { isTrue, setIsTrue, toggle } = useBoolean();

  
    

    //translation
    const[ t, i18n ] = useTranslation( "global" )
    
    //


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

<<<<<<< HEAD:client/src/Components/Hooks/Contex/ProviderContext.jsx
            lightDark,  
=======
            lightDark,
            
            //languagues mode
            enIcon,
            esIcon,  
>>>>>>> testing:client/src/Hooks/Contex/ProviderContext.jsx
            
            //technology icons 
            bootstrapIcon, 
            csspIcon, 
            gitHubIcon,  
            jspIcon,
            mysqlpIcon,
            nodepIcon,
            reactpIcon, } = useGetImage();


    //change languague - image
    const { toggleLanguage, isSpanish, setIsSpanish } = useChangeLanguage( ); 
   
 

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

                    //boolean
                    isTrue, 
                    setIsTrue,
                    toggle,
                    
                    //translations
                    t,
                    i18n,
                    isSpanish,
                    setIsSpanish,
                    toggleLanguage,
                    
                    //languagues mode
                    enIcon,
                    esIcon,  



                 
                } 
            
            } > 
        
            { children } 


        
        </Contex.Provider>
    )
}