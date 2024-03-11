import { Contex } from "./CreateContext";

//custom hook
import { useGetImage } from '../CustomHooks/index';

export const ContextProvider = ( { children } ) => {

    //images Projects
    const { weatherImage } = useGetImage();
   

    return(

        <Contex.Provider value={ { weatherImage } } > { children } </Contex.Provider>
    )
}