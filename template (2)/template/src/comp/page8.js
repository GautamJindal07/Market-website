import React from "react";
function Page8(){
    return(
        <div className="help">
        <div clas="conatiner">
          <div className="row">
            <h1 className="h1needhelp">Need Help?</h1>
            <h2>Don't forget to contact with us</h2>
            <p>Feel free to give us a call, or shoot us an email. Our team is ready to assist you, answer your queries, and discuss how we can bring your creative visions to life.<br/> Let's start the conversation today!</p>
          </div>
          <div className="row placeholders">
            <div className="col-md-1">

            </div>
            <div className="col-md-4">
              <div className="input1">
                <input type="email" placeholder="Email" className="inputtags"/>
               </div>
            </div>
            <div className="col-md-4">
              <div className="input2">
                <input type="text" placeholder="Message" className="inputtags"/>
                </div>
            </div>
            {/* <div className="col-md-1">

            </div>
            <div className="col-md-2">
              <div className="input1">
                <input type="text" placeholder="msg" className="inputtags"/>
               </div>
            </div> */}
            <div className="col-md-2">
              <div>
                <button className="shape1">SUBMIT</button>
            </div>
            </div>
            <div className="col-md-1">

            </div>
            
          </div>
        </div>
      </div>
    );
}
export default Page8;