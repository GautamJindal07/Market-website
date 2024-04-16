import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-sm-12">

            </div>
            <div className="col-md-2 col-sm-12">
            <div className="company">  <Link to="/"><h1>Company</h1></Link></div>
              <Link to="/about"><p>About</p></Link>
              <Link to="https://www.facebook.com/"><p>Facebook</p></Link>
              <Link to="https://www.google.com/intl/en_in/gmail/about/"><p>Email</p></Link>
              <Link to="https://in.linkedin.com/"><p>Linkedin</p></Link>
              
            </div>
            <div className="col-md-1 col-sm-12">
              
            </div>
            <div className="col-md-2 col-sm-12">
            <div className="company">  <Link to="/"><h1>Company</h1></Link> </div>
              <Link to="about"><p>About</p></Link>
              <Link to="https://www.facebook.com/"><p>Facebook</p></Link>
              <Link to="https://www.google.com/intl/en_in/gmail/about/"><p>Email</p></Link>
              <Link to="https://in.linkedin.com/"><p>Linkedin</p></Link>
              
            </div>
            <div className="col-md-2 col-sm-12 companyapproach">
            <img src={require("./Images/img1.png")} alt="logo"/>
            </div>
            <div className="col-md-1 col-sm-12">

            </div>
            <div className="col-md-2 col-sm-12">
            <img src={require("./Images/img2.png")} alt="logo"/>
            </div>
            <div className="col-md-1 col-sm-12">
              
            </div>
          </div>
          
          
        </div>
      </div>
    );
}
export default Footer;