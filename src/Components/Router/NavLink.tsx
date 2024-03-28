import { ReactNode } from "react";
import { Link } from "react-router-dom";
import './NavLink.css'

type NavLinkProps = {
    to:string,
    label:string,
    className?:string
}
function NavLink({to, label, className}:NavLinkProps) {
    
    return (
      <div className={`nav-link-container ${className}`}>
        <Link to={to} className="nav-link">
        </Link>
        <p>{label[0].toUpperCase().concat(label.substring(1))}</p>
      </div>
    );
  }
  
  export default NavLink;
  