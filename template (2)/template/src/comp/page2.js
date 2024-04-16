import React from "react";
function Page2(){
    return(
        <div>
        <div className="conatiner">
          <div className="row row1">
            <div className="col-md-4 col-sm-12 div1">
            <img src={require("./Images/baja.png")} alt="logo"/>
              <h1>500+</h1>
              <h2>Successfully</h2>
              <p>completed projects</p>
              <p>
              At BlueRex, we take immense pride in our journey marked by creativity, dedication, and the successful completion. With each endeavor, we have ventured into diverse industries, ranging from startups to established enterprises, and left a trail of innovation behind us.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 div2">
            <img src={require("./Images/baja.png")} alt="logo"/>
              <h1>254+</h1>
              <h2>Highly specialised<br />employees</h2>
              <p>
              At BlueRex, our success story is shaped by the expertise and dedication of our 254+ highly specialized employees. Each team member is not merely an expert but a passionate artisan, meticulously honing their craft to perfection.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 div1">
            <img src={require("./Images/baja.png")} alt="logo"/>
              <h1>45+</h1>
              <h2>Awards<br />around the world</h2>
              <p>
              With each accolade received, we are inspired to reach even greater heights. We take pride in our achievements, and each award motivates us to innovate, create, and exceed expectations in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Page2;