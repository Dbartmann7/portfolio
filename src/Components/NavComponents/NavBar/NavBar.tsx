import { CSSProperties, LinkHTMLAttributes, ReactNode } from "react"
import Btn from "../../Buttons/Btn"
import './NavBar.css'
import { NavLinkObjType } from "../../Router/BrowserRouter"
import NavLink from "../../Router/NavLink"


type NavBarPropsType = {
    className?:string,
    links:NavLinkObjType[],
    curLocation:string
}

function NavBar({ className, links, curLocation}:NavBarPropsType){

    return(
        <nav className={`${className} nav-container`}>
            {links.map((linkObj, i) => {
                return <NavLink key={i} to={linkObj.to} label={linkObj.label} className={
                    linkObj.to === curLocation ? 'cur-nav': '' 
                }/>
            })}
        </nav>
    )
}

export default NavBar