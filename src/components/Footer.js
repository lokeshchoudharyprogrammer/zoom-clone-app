import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-30">
            <div className="footer-text__title">Infinity Call</div>
            <div className="footer-text__body">
            Experience boundless communication possibilities with Infinity Call, where seamless video calls and advanced features unite.
            </div>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Quick links</div>
            <ul className="footer-list">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#home">Services</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Newsletter</div>
            <div className="footer-text__body">
              Subscribe to get latest updates and new on whiskers
            </div>
            <div className="footer-input">
              <input type="text" name="email" placeholder="Email id" />
              <div className="footer-input__icon">
                <ion-icon name="paper-plane-outline" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">Coded by Lokesh Choudhary.</div>
      </div>
    </footer>
  );
}

export default Footer;
