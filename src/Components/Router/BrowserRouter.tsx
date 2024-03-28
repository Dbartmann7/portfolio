import { Link, Navigate, createBrowserRouter } from "react-router-dom";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ProjectsPage from "../Pages/ProjectsPage/ProjectsPage";
import { LinkHTMLAttributes, ReactNode } from "react";
import App from "../../App";
import AboutPage from "../Pages/AboutPage/AboutPage";
import NavLink from "./NavLink";

const paths = ['/about', '/projects']
const elements = [<AboutPage/>, <ProjectsPage/>]
export type NavLinkObjType = {
    to:string,
    label:string,
}
// <NavLink key={i} to={path} label={path.substring(1, path.length)}/>
export const links:NavLinkObjType[] = paths.map((path, i) => {
    return {to:path, label:path.substring(1, path.length)}
})
export  const browserRouter = createBrowserRouter([...paths.map((path, i) => {
    return {path:path, element:elements[i]}
}), {path:'*', element:<Navigate to="/about" replace />}])
