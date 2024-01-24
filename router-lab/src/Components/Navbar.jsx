import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div>
      <nav>
        <Link to={"/"}>
            <h1 style={{color:"white", margin:"0 15px"}}>Kalvium</h1>
        </Link>
        <div className='flex'>
            <Link to={"/Contact"}> 
                <h3>Contact</h3>
            </Link>
            <Link to={"/About"}>
                <h3>About</h3>
            </Link>
        </div>
      </nav>
    </div>
  

    )
}
export default Navbar;
