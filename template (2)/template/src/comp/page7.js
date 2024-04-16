import React from "react";
function  Page7(){
    return(

        <div className="blackman">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-sm-12">

            </div>
            <div className="col-md-5 col-sm-12">
              <p className="heading0">Our Happy Client</p>
              <h1 className="heading1">Testimonials</h1>
              <div className="comma">
                “
            </div>
            <div className="content100">The animations BlueRex created for our marketing campaign were 
            nothing short of phenomenal. They brought life to our ideas and made our campaign visually captivating. The entire process was smooth, and the team was a pleasure to work with. BlueRex is now our go-to creative partner.</div>
              <img src={require("./Images/star.png")} alt="logo" className="star_img"/>
              <p className="john">Mr. Daniel K.</p>
            </div>
            <div className="col-md-5 col-sm-12">
            <img src={require("./Images/clientman.png")} alt="logo"/>
            </div>
            <div className="col-md-1 col-sm-12">

            </div>
          </div>
        </div>
      </div>
    );
}
export default Page7;