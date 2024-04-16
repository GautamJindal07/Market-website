import React from "react";
import { Link } from "react-router-dom";
function Page5(){
    return(
        <div className="recent">
        <div className="container">
          <div className="row">
            <h1 className="languages">Our Recent Work</h1>
            <p className="contentimgs">
            Our recent work in product design spans various industries, including electronics, home appliances, fashion accessories, and more. We collaborate closely with our clients, understanding their visions and transforming concepts into tangible, market-ready products. Each design encapsulates creativity and innovation, reflecting our commitment to shaping the future of product aesthetics.
            </p>
            <div className="watchbtn1">
              {/* <ul>
                <li>WEB DESIGN</li>
                <li>MOBILE APP</li>
                <li>BRANDING</li>
                <li className="branding">BRANDING</li>
              </ul> */}
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
          <div className="page5_shape">
          <Link to="/about" className="text-decoration-none"><button className="shape">READ MORE</button></Link>
          </div>
        </div>
      </div>
    );
}
export default Page5;