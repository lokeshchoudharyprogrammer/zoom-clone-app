import React from "react";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/login.css"
function HeroBanner() {
  return (
    <section id="home">
      <Container>
        <Row style={{ display: "flex" }}>
          <div className="home-text">
            <div className="section-text__subtitle">Explore the whiskers</div>
            <div className="section-text__title-big">
              Call & Chat  With Your Friend Free
            </div>
            <div className="section-text__body">
              Introducing our innovative video call app, seamlessly connecting users through high-quality video and audio communication. Enjoy group calls, screen sharing, and secure conversations, redefining virtual interactions for both personal and professional use.
            </div>
            <a href="#download">
              <Link to='/video-app' style={{ color: "whitesmoke" }}>

                <button className="call-btn">Create A Metting
                </button>
              </Link>
            </a>
          </div>

          <div className="section-image">
            <img className="img-new" src="https://www.dingtone.me/images/download/img_download@2x.png" alt="App Preview" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;
