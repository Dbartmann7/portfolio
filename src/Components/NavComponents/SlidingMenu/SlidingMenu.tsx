import { CSSProperties, ReactNode, useEffect, useState } from "react"
import "./SlidingMenu.css"
import NavBar from "../NavBar/NavBar"
import HamburgerBtn from "../../Buttons/HamburgerBtn"
import { NavLinkObjType, links } from "../../Router/BrowserRouter"
import { useLocation } from "react-router-dom"
type SlidingMenuPropsType = {
    isOpen:boolean,
    setIsOpen: (toggle:boolean) => void
    links:NavLinkObjType[]
}

function SlidingMenu({isOpen,setIsOpen, links}:SlidingMenuPropsType){
    const [hasOpened, setHasOpened] = useState<boolean>()
    const curLocation = useLocation()

    useEffect(() => {
        if(isOpen) setHasOpened(true)
    }, [isOpen])
    return(
        <div style={{}} className={`sliding-menu-container ${hasOpened ? isOpen ? 'sliding-menu-open-transition':"sliding-menu-close-transition":''}`} >
            <header className="sliding-menu-header">
                <HamburgerBtn className={"sliding-menu-hamburger-button"} clickFn={() => {setIsOpen(false)}}/>
            </header>
            <NavBar className="sliding-window-nav" links={links} curLocation={curLocation.pathname} style={{fontSize:'20px'}}/>
        </div>
    )
}

export default SlidingMenu