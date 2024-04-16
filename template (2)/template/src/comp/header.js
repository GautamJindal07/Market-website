import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <header className="header">
        <nav className="navbar navbar-expand-lg logo">
        <a href="/"><img src={require("./Images/Logo.png")} alt="logo"/></a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About Us</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register Now</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Contact</a> */}
                <Link to="/Contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#"><img src={require("./Images/burgericon.png")} alt="logo"/></a>
              </li> */}
            </ul>
          </div>
        </nav>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <p className="containertext"><i>We are best and creative agency</i></p>
            <h1 className="heading">
              We turn creative ideas
              into your business.
            </h1>
            <p className="heading2">
            "Experience Creative Brilliance Unleashed! Where Your Ideas Take Flight and Innovation Knows No Limits."
            </p>
            <Link to="/about"><button className="butn1">Our Story</button></Link>
            <Link to="/about"><button className="butn2">Read more</button></Link>
          </div>
          <div className="col-md-6 col-sm-12 banner_hide">
          <img src={require("./Images/man.png")} alt="logo" className="man_img"/>
          </div>
        </div>
      </header>
    );
}
export default Header;