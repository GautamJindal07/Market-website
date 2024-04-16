import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPass] = useState("");
  const [show_text, setShow] = useState("SHOW DATA");
  const navigate = useNavigate();

  function showed() {
    if (show_text === "SHOW DATA") {
      setShow("HIDE DATA");
    } else {
      setShow("SHOW DATA");
    }
  }

  async function logged(e) {
    e.preventDefault();
    if (Email === "" || Password === "") {
      alert("Enter details first");
      return;
    }

    const res = await axios.post(
      "http://localhost:8000/login",
      {
        Email: Email,
        Password: Password,
      }
    );

    if (res.data.message === "success") {
      navigate("/");
    } else {
      alert("Password or username invalid");
    }
  }

  return (
    <div className="rgs" style={{ height: '100vh' }}>
      <nav className="navbar navbar-expand-lg logo">
      <a href="/"><img src={require("./Images/Logo.png")} alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/*<li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Page5">Recent Work</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register Now</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Contact</a> 
                <Link to="/Contact" className="nav-link">Contact Us</Link>
              </li>*/}
              {/* <li className="nav-item">
                <a className="nav-link" href="#"><img src={require("./Images/burgericon.png")} alt="logo"/></a>
              </li> */}
            </ul>
          </div>
        </nav>

      <div className="contact_us_2">
        <div className="responsive-container-block big-container">
          <div className="blueBG" ></div>
          <div className="responsive-container-block container">
            <form className="form-box form">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head" style={{color:'white',textAlign:'center',fontSize:'40px'}}>Login</p>

                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title" style={{ color: 'white',marginLeft:'20px' }}>EMAIL*</p>
                    <input className="input form-control" id="ipmgh"style={{marginLeft:'20px',width:'1200px' }} name="Email" onChange={(e) => { setEmail(e.target.value) }} value={Email} required placeholder="Please enter email..." />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title" style={{ color: 'white',marginLeft:'20px' }}>PASSWORD*</p>
                    <input className="input form-control" style={{ marginLeft:'20px',width:'1200px' }}id="imgis" name="Password" onChange={(e) => { setPass(e.target.value) }} value={Password} type='password' required placeholder="Please enter password..." />
                  </div>
                </div>

                <div className="submit-btn1" onClick={showed} style={{ color: 'white',marginLeft:'20px' }}>
                  {show_text}
                </div>

                <button className="submit-btn single-form" onClick={(e) => { logged(e) }} style={{ backgroundColor: 'black', color: 'white',marginLeft:'20px' }}>
                  LOGIN
                </button>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '1.3rem', color: 'white' }}>Want To REGISTER?</div>
              <div style={{ textAlign: 'center', marginTop: '0.5em' }}>
                <Link to="/Register" style={{ textAlign: 'center', fontSize: '1.3rem', textDecoration: 'none', color: 'white' }}>Register Now</Link>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="actual_p">
          <div className={(show_text === "HIDE DATA" ? " actual " : " demo ")}>
            <p className={"data"} style={{ color: 'white' }}>Email: {Email}</p>
            <p className={"data"} style={{ color: 'white' }}>Password: {Password}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
