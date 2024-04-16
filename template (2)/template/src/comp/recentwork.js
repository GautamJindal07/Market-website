import React from "react";
import { Link } from "react-router-dom";
function Recentwork(){
    return(
      <section>
        <div className="recent">
          <nav className="navbar navbar-expand-lg logo">
          <a href="/"><img src={require("./Images/Logo.png")} alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Page5">Recent Work</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register Now</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Contact</a> */}
                <Link to="/Contact" className="nav-link">Contact Us</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#"><img src={require("./Images/burgericon.png")} alt="logo"/></Link>
              </li> */}
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <h1 className="languages">Our Recent Work</h1>
            <p className="contentimgs">
              Lorem ipsum dolor sit amet consec tetur adipisicing elit. Sed
              sodales enim ut rohncus lorem<br />
              ipsum ese treds.Lorem ipsum dolor sit amet consec tetur adipisicing
              elit.Sed sodales enim ut<br />
              rohncus lorem ipsum ese treds.Lorem ipsum dolor sit amet consec
              tetur adipisicing elit.
            </p>
            <div className="watchbtn1">
              <ul>
                <li>WEB DESIGN</li>
                <li>MOBILE APP</li>
                <li>BRANDING</li>
                <li className="branding">BRANDING</li>
              </ul>
            </div>
          </div>
          <div className="row images123">

            <div className="col-md-4">
              <img src={require("./Images/1.png")} alt="logo"/>
            </div>
            <div className="col-md-4">
            <img src={require("./Images/2.png")} alt="logo"/>
            </div>
            <div className="col-md-4">
            <img src={require("./Images/3.png")} alt="logo"/>
            </div>
          </div>
          <div className="row images456">
            <div className="col-md-4">
            <img src={require("./Images/4.png")} alt="logo"/>
            </div>
            <div className="col-md-4">
            <img src={require("./Images/5.png")} alt="logo"/>
            </div>
            <div className="col-md-4">
            <img src={require("./Images/6.png")} alt="logo"/>
            </div>
          </div>
          <div className="row images789">
            <div className="col-md-4">
            <img src={require("./Images/7.png")} alt="logo"/>
            </div>
            <div className="col-md-4">
            <img src={require("./Images/8.png")} alt="logo"/>
            </div>
            <div className="col-md-4">
            <img src={require("./Images/9.png")} alt="logo"/>
            </div>
          </div>
          <div className="row">
            <button className="shape">READ MORE</button>
          </div>
        </div>
      </div>
      </section>
    );
}
export default Recentwork;