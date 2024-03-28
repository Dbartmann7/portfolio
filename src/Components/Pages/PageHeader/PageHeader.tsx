import { useContext, useEffect, useState } from "react";
import HamburgerBtn from "../../Buttons/HamburgerBtn";
import NavBar from "../../NavComponents/NavBar/NavBar";
import { links } from "../../Router/BrowserRouter";
import { useMediaQuery } from "@react-hook/media-query";
import './PageHeader.css'

import { Location, useLocation } from "react-router-dom";
type PageHeaderProps = {
    setIsSlidingMenuOpen: (val:boolean) => void
}

function PageHeader({setIsSlidingMenuOpen}:PageHeaderProps) {
    const curLocation:Location<any> = useLocation()
    const [hideNavBar, setHideNavBar] = useState<boolean>(false)
    const largeScreenWidth = useMediaQuery("(min-width : 560px)")
    useEffect(() => {
        setHideNavBar(!largeScreenWidth)
    }, [largeScreenWidth])
    
    useEffect(() => {
        console.log(curLocation)
    }, [curLocation])
    return (
        <header className="page-header">
        <div className="title-container">
            <h1>Daniel<br/>Bartmann</h1>
        </div>
        {hideNavBar ? 
            <HamburgerBtn className="hamburger-button" clickFn={() => {setIsSlidingMenuOpen(true)}}/>
           :
            <NavBar links={links} curLocation={curLocation.pathname}/>
        }
    </header>
    
    );
  }
  
  export default PageHeader;
  