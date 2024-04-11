import { Contex } from "./CreateContext";

//custom hook
import { useGetImage, useBoolean, useChangeLanguage } from '../CustomHooks/index';

//translation
import { useTranslation } from 'react-i18next';



export const ContextProvider = ( { children } ) => {


    
    //boolean
    const { isTrue, setIsTrue, toggle } = useBoolean();

    //change languague
    const { toggleLanguage, isSpanish, setIsSpanish } = useChangeLanguage()

    //translation
    const[ t, i18n ] = useTranslation( "global" )
    
    //const { toggle, isTrue } = useContext( Contex );


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



                 
                } 
            
            } > 
        
            { children } 


        
        </Contex.Provider>
    )
}