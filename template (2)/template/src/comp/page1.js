import React from "react";
import { Link } from "react-router-dom";
function Page1(){
    return(
        <div className="background">
       <div className="container">
        <div className="row">
          <div className="col-md-1">

          </div>
          <div className="col-md-5">
            <p className="dream">Dream Big Inspire The World</p>
            <h1 className="creative">We turn creative ideas
              into your business.</h1>
              <div className="watchbtn1">
                {/* <ul>
                  <li>WEB DESIGN</li>
                  <li>MOBILE APP</li>
                  <li>BRANDING</li>
                  <li className="branding">BRANDING</li>
                </ul> */}
              </div>
              <p className="para2">
              Embrace Limitless Possibilities! Crafted with Passion, Designed for Impact. Where Imagination Takes Center Stage and Dreams Come to Life. Join Us in the Journey of Transforming Ideas into Extraordinary Realities. Let's Create Something Exceptional Together!
              </p>
              <Link to="/about" className="text-decoration-none"><button className="shape">READ MORE</button></Link>
          </div>
          <div className="col-md-5">
          <img src={require("./Images/watch.png")} alt="logo" className="img-fluid"/>
          </div>
          <div className="col-md-1">
            
          </div>
        </div>
       </div>
      </div>
    );
}
export default Page1;