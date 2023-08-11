import React from "react";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
              eiusm tempor incididunt ulabore et dolore magna aliqua.
            </div>
            <a href="#download" className="download-btn">
              <Link to='/video-app' style={{ color: "whitesmoke" }}>

                Get Start Calling Now
              </Link>
            </a>
          </div>

          <div className="section-image">
            <img width={"80%"} src="https://www.dingtone.me/images/download/img_download@2x.png" alt="App Preview" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;
