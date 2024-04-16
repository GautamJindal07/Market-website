import React from "react";
import { Link } from "react-router-dom";
function Page4(){
    return(
        <div>
        <div className="container">
          <div className="row xyz">
            <div className="col-md-1 col-sm-12">

            </div>
            <div className="col-md-6 col-sm-12">
              <p className="cntnt1">We are best and creative agency</p>
              <p className="cntnt2">Let's Shape Our Future Together.</p>
              <p className="cntnt">
              Let's embark on this exciting journey together. Let's explore new horizons, break boundaries, and create exceptional experiences that leave a lasting impact. Let's innovate, inspire, and achieve remarkable milestones. Let's grow together with BlueRex 
              where creativity meets strategy, and dreams become digital realities.
              </p>
              <table>
                <tr>
                  <td>
                  <img src={require("./Images/graphicdesign.png")} alt="logo" width="70" height="70" />
                    <h2 className="h2graphic">Graphic Quotes</h2>
                    <p className="p11">
                    <br />Whether you need motivational quotes for your office space, engaging social media content, or inspiring visuals for your presentations, our graphic quotes are meticulously crafted to convey your message with impact.
                    </p>
                    <Link to="/about" className="redmore text-decoration-none"><button className="shape " >READ MORE</button></Link>
                  </td>
                  <td className="td2">
                  <img src={require("./Images/baja1.png")} alt="logo" width="70" height="70" />
                    <h2 className="h2graphic">Graphic Design</h2>
                    <p className="p11">
                    <br />At BlueRex, our graphic design services are more than just creating visually appealing images; they are a blend of creativity, strategy, and storytelling. Our team of skilled designers specializes in crafting compelling visual narratives that resonate with your audience.
                    </p>
                    <Link to="/about" className="text-decoration-none"><button className="shape ">READ MORE</button></Link>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-md-4 col-sm-12 video_img">
            <img src={require("./Images/video.png")} alt="logo" width="400px"  height="350px"/>
            </div>
            <div className="col-md-1 col-sm-12">
              
            </div>
          </div>
        </div>
      </div>
    );
}
export default Page4;