import React, { useState } from "react";
import "./App.css";
import logo from './logo.jpg';
import mail from './mail.png';
import photojpeg from './photojpeg.jpeg';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import { CiFootball } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import About from "./About"; // Import the About component
import Services from "./Services"; // Import the Services component
import Works from "./Works"; // Import the Works component
import Blogs from "./Blogs"; // Import the Blogs component
import Contact from "./Contact"; // Import the Contact component
import { MdArrowOutward } from "react-icons/md";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Initial page is "home"

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    
  };

  return (
    <div className="app">
      <div className="main-container" style={{ display: 'flex' }}>
        <div className="side-bar">
          <div className="content">
            <div className="logo-1">
              <div className="logo">
                <p className="jac">Jac.</p>
              </div>
            </div>
            <div className="menu-1">
              <div className="menu">
                <p className="home" onClick={() => handleMenuClick("home")}>Home</p>
                <p className="about" onClick={() => handleMenuClick("about")}>About</p>
                <p className="services" onClick={() => handleMenuClick("services")}>Services</p>
                <p className="works" onClick={() => handleMenuClick("works")}>Works</p>
                <p className="blogs" onClick={() => handleMenuClick("blogs")}>Blogs</p>
                <p className="contact" onClick={() => handleMenuClick("contact")}>Contact</p>
              </div>

            </div>
            <div className="social-media">
              <FaBehance size={40} style={{ fill: 'white' }} />
              <CiFootball size={40} style={{ fill: 'white' }} />
              <CiInstagram size={40} style={{ fill: 'white' }} />
            </div>
            <div className="copyrights">
              <p className="copyright-2023-jacob-jo">
                Copyright ©2023 Jacob Jones. All right reserved.
              </p>
            </div>
          </div>
        </div>

    <div >
    
    </div>
    


    





        <div className="hero" style={{ backgroundImage: 'Picture2.png', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {currentPage === "home" && (
            <div className="group-544">
              <div className="content-1">
                <div className="content">
                  <div className="text">
                    <div className="txt">
                      <p className="my-name-is-jacob-jones">
                        My name is Jacob Jones...
                      </p>
                      <p className="product-designer-based">
                        Product Designer based in London
                      </p>
                    </div>
                    <div className="button-1">
                      <div className="button">
                        <p className="let-talk-with-me">Let's talk </p>
                        <FaArrowUp />
                        <MdArrowOutward />




                      </div>
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="call">
                      <FaPhoneAlt />
                      <p className="\\\_-770224440505">+77 022 444 05 05</p>
                    </div>
                    <div className="mail">
                      <CiMail />
                      <p className="jacob-360-gmail-com">jacob360@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <CiStar />
            </div>
          )}
          {currentPage === "about" && <About />}
          {currentPage === "services" && <Services />}
          {currentPage === "works" && <Works />}
          {currentPage === "blogs" && <Blogs />}
          {currentPage === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}