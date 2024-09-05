import { Link, NavLink } from "react-router-dom";

import './Header.css'
const Header = () => {
    return (
        <div>
            <nav >
           
           
               <span>my website </span>
               <NavLink className="Nav" to= "/">Home</NavLink>
               <NavLink className="Nav" to= "/about">About</NavLink>
               <NavLink className="Nav" to= "/contact">Contact</NavLink>
               <NavLink className="Nav" to= "/user">User</NavLink>
           
        </nav>
        </div>
    );
};

export default Header;