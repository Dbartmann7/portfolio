import {ReactNode, useEffect} from "react";
import {createContext} from "react";
import {useMediaQuery} from '@react-hook/media-query'

export const MobileContext = createContext({})
export type MobileContextType = {
    onMobile:Boolean,
    isPortrait:Boolean
}

export const MobileContextProvider: React.FC<{children:ReactNode}> = ({children}) => {
  
    const onMobile:Boolean = useMediaQuery('only screen and (hover:none)')
    const isPortrait = useMediaQuery("only screen and (orientation: portrait)")
 
    const value:MobileContextType = {
        onMobile, isPortrait
    }
    return(
        <MobileContext.Provider value={value}>
            {children}
        </MobileContext.Provider>
    )
}