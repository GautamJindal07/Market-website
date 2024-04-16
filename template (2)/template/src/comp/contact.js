import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Contact() {
  const [data, setData] = useState({ Email: "", Message: "" });

  function onChangeHandler(event) {
    setData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function onSubmitHandler() {
    // e.preventDefault(); // Prevents the default form submission behavior

    axios
      .post("http://localhost:8000/contactUS", data)
      .then((response) => {
        if (response.status === 200) {
          let d = response.data;
          console.log(d.msg);
          console.log(response.status);
        }
      })
      .catch((error) => {
        console.error("Error sending contact form data:", error);
      });
  }

  return (
    <section className="contactroute">
      <nav className="navbar navbar-expand-lg logo">
        <a href="/">
          <img src={require("./Images/Logo.png")} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse contaact" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="helpcontact">
        <div className="container">
          <div className="row">
            <h1 className="h1needhelp">Need Help?</h1>
            <h2>Don't forget to contact us</h2>
            <p>
              Feel free to give us a call, or shoot us an email. Our team is
              ready to assist you, answer your queries, and discuss how we can
              bring your creative visions to life. Let's start the conversation
              today!
            </p>
          </div>
          <div className="row placeholders" style={{width:'100%', display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <div className="col-md-1"></div>
            <form onSubmit={onSubmitHandler} style={{width:'100%', display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
              <div className="col-md-4">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="Email"
                  className="form-control"
                  id="Email"
                  required
                  value={data.Email}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="Message" className="form-label">
                  Message
                </label>
                <input
                  type="text"
                  name="Message"
                  className="form-control"
                  id="Message"
                  required
                  value={data.Message}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col-md-2">
                <br />
                <button className="shape1" type="submit">
                  SUBMIT
                </button>
              </div>
            </form>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
