import React from "react";
import { Row, Container } from "react-bootstrap";

function Features() {
  return (
    <section id="features">
      <Container>
        <Row>
          <div className="section-image-features">
            <img src="https://www.dingtone.me/images/download/img_download@2x.png" width="10" alt="features" />
          </div>
          <div className="section-text">
            <div className="section-text__title">Features</div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">Easy to Call</div>
                <div className="section-text__desc">
                  Lorem psum olorsit amet ectetur adipiscing elit, sed dov.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Vioce Call
                </div>
                <div className="section-text__desc">
                  Lorem psum olorsit amet ectetur adipiscing elit, sed dov.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Text Sms
                </div>
                <div className="section-text__desc">
                  Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">Screen Sharing </div>
                <div className="section-text__desc">
                  Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
