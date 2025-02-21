import React from "react";
import "./Header.css";
import address from "./place.jpg";
import phone from "./phone.png";
import instagram from "./instagram.jpg";
import facebook from "./facebook.jpg";
import arrow from "./arrow.jpg";
import hamburg from "./th.jpg";
export const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="contacts-section">
          <div>
            <img src={address} height = "9%" alt="" />
            Hyderabad, INDIA
          </div>
          <div>
            <img src={phone} height = "9%" alt="" />
            +91 6305858219
          </div>
          <div>
            <img src={instagram} height = "9%"alt="" />
            info@stanjo.in
          </div>
        </div>
        <div className="socialmedia-icons">
          <img src={address} alt="place" />
          <img src={phone} alt="phone" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={arrow} alt="arrow"/>
          <img src={hamburg} alt="hamburger"/>
        </div>
      </div>
      <div className="bottom-header">
        <nav>
          
        </nav>
        <div>Home</div>
        <div>About Us | Certifications</div>
        <div className="products">
          Products
          <img src={arrow} alt=">" />
        </div>
        <div>LM79 Reports</div>
        <div>Shop</div>
        <div>Contact Us</div>
        <div>
          Calculators <img src={arrow} alt=">" />
        </div>
        <div className="header-hamburg">
          <img src={hamburg} alt="menu" />
        </div>
      </div>
    </header>
  );
};
