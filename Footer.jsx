import React from "react";
import facebook from "../images/facebookicon.svg";

export default function Footer() {
  return (
    <div className="footer-head">
      <div className="footer-left">
        <h4>Lighting Your World with Innovation and Efficiency</h4>
        <div>
          <div className="footer-contact-details">
            <img src={facebook} alt="fb" />
            Hyderabad, India
          </div>
          <div className="footer-contact-details">
            <img src={facebook} alt="fb" />
            +91 6305858219
          </div>
          <div className="footer-contact-details">
            <img src={facebook} alt="fb" />
             info@stanjo.in
          </div>
        </div>
        <div className="socialmedia-icons">
          <img src={facebook} alt="facebook" />
          <img src={facebook} alt="facebook" />
          <img src={facebook} alt="facebook" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-products">
            <h5>PRODUCTS</h5>
            <div>Panel Lights</div>
            <div>Panel Lights</div>
            <div>Panel Lights</div>
            <div>Panel Lights</div>
            <div>Panel Lights</div>
            <div>Panel Lights</div>
            <div>Panel Lights</div>
        </div>
        <div className="footer-others">
            <h5>OTHERS</h5>
            <div>About</div>
            <div>About</div>
            <div>About</div>
            <div>About</div>
            <div>About</div>
            <div>About</div>
        </div>
      </div>
    </div>
  );
}
