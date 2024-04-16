import React from "react";
import { Link } from "react-router-dom";
function Page3(){
    return(
        <div>
        <div className="conatiner">
          <div className=" together">
            <h1>Let's Grow Together</h1>
          <h1>We turn your creative ideas into your business.</h1>
          <p>
          At BlueRex, we believe in the power of collaborative growth. Partnering with us means embarking on a transformative journey where your ideas meet our innovation, your vision merges with our expertise, and your goals align seamlessly with our dedication. We dont just create designs; we craft experiences, build brands, and shape futures.
          </p>
          <Link to="/about" className="text-decoration-none"><button className="shape">READ MORE</button></Link>
          </div>
        </div>
      </div>
    );
}
export default Page3;