import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function About() {
  const[about,setAbout] = useState([]);

  useEffect(()=> {

    const getAbout = () =>{
      const res =  axios.get("http://localhost:8000/listabout").then(response => {
        setAbout(response.data);
      })
    }
    getAbout();
  },[])
  return (
    <div className="abtus">
    <section id="register">
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
              <Link className="nav-link" to="/about">About Us</Link>
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
              <a className="nav-link" href="#"><img src={require("./Images/burgericon.png")} alt="logo"/></a>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 work">
            <img src={require("./Images/work.jpg")} className="new_img" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h1 className="h2_text">
              About Us
            </h1>
            
              {
                about.map ((data)=> {
                  return <p className="exp_text">
                    {data.aboutus}
                    </p>
                })
              }
            

            <div className="col-12">
            {/* <button type="submit" className="btn btn-dark">
              Read More
            </button> */}
          </div>
          </div>
        </div>
      </div>
      </section>
      </div>
  );
}
export default About;