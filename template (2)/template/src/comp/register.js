// import React from "react";
import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Logo from "../images/Logo.png";
function Register() {
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    Username:'',
    Email: '',
    Password: '',
    Address: '',
    Address2: '',
    City: '',
    State: '',
    Zip: '',
  });
  const [check, setCheck] = useState(false);

  function onChangeFunction(){
     if (
      data.FirstName.trim() !== '' &&
      data.LastName.trim() !== '' &&
      data.Username.trim() !== '' &&
      data.Email.trim() !== '' &&
      data.Password.trim() !== '' &&
      data.Address.trim() !== '' &&
      data.Address2.trim() !== '' &&
      data.City.trim() !== '' &&
      data.State.trim() !== '' &&
      data.Zip.trim() !== '' 
    ) {
      setCheck(true);
    } 
    else {
      alert('Please fill in all required fields');
    }
    axios.post("http://localhost:8000/register_users", data).then(response=>
    {
        if(response.status===200){
            let d = response.data;
            console.log(d.msg);
            console.log(response.status);
        }
      });
    }
  function onChangeHandler(event) {
    setData((prev)=>{
      return{
        ...prev,
        [event.target.name]:event.target.value,
      }
    })
   
  }

  function onClickHandler() {
    
}
  return (
    <div className="rgs">
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
                <Link className="nav-link" to="/">Login Now</Link>
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
      {/* <div className="container-fluid bg-light py-3">
        <header className="text-center header2">
          <h1>REGISTER NOW!</h1>
        </header>
      </div> */}
      <section className="container  w-50 text-light p-2">
        <form className="row g-3 p-3 form"
        onSubmit={(event)=>{
          event.preventDefault();
        }}
        >
          <div className="col-md-4">
            <label for="validationDefault01" className="form-label">
              First name
            </label>
            <input
              type="text" 
              name='FirstName'
              className="form-control"
              id="FirstName"
              required
              value={data.FirstName}
              onChange={onChangeHandler}
             />
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              name='LastName'
              className="form-control"
              id="LastName"
              required
              value={data.LastName}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-md-4">
            <label for="validationDefaultUsername" className="form-label">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="text"
                name='Username'
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
                value={data.Username}
                onChange={onChangeHandler}

              />
            </div>
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" name="Email" className="form-control" id="inputEmail4" value={data.Email} onChange={onChangeHandler} required/>
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="Password"
              id="inputPassword4"
              required
              value={data.Password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              name='Address'
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={data.Address}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              name="Address2"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              value={data.Address2}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" name='City' className="form-control" id="inputCity" value={data.City} onChange={onChangeHandler} required />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <select id="inputState" name="State" className="form-select"     value={data.State}
                onChange={onChangeHandler}>
              <option selected>Choose...</option>
              <option>...</option>
            </select>
            
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label" >
              Zip
            </label>
            <input type="text" className="form-control" name="Zip" id="inputZip" value={data.Zip}
                onChange={onChangeHandler}/>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
          <Link to="/"><button type="submit" className="btn btn-dark" onClick={onChangeFunction}>
              Sign in
            </button></Link>
          </div>
        </form>
      </section>
    </section>
    {/* {check ? (
        <div className="signup-info">
          Thank you for signing up!
          <p>First Name: {data.FirstName}</p>
          <p>Last Name: {data.LastName}</p>
          <p>Username: {data.Username}</p>
          <p>Email: {data.Email}</p>
          <p>Password: {data.Password}</p>
          <p>Address: {data.Address}</p>
          <p>Address2: {data.Address2}</p>
          <p>City: {data.City}</p>
          <p>State: {data.State}</p>
          <p>Zip: {data.Zip}</p>
        </div>
      ) : (
        <div></div>
      )} */}
    </div>
  );
}
export default Register;