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
                  Experience effortless connectivity with our user-friendly video call app, ensuring hassle-free and crystal-clear conversations at your fingertips
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Vioce Call
                </div>
                <div className="section-text__desc">
                  Immerse yourself in lifelike video calls with our app's immersive visual quality, making every conversation feel like you're in the same room.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">
                  Text Sms
                </div>
                <div className="section-text__desc">
                  Stay connected beyond video calls with our app's seamless text messaging feature, enabling you to chat and share with ease.
                </div>
              </div>

              <div className="feature-box col-50">
                <div className="section-text__title-small">Screen Sharing </div>
                <div className="section-text__desc">
                  Collaborate effortlessly through our app's screen sharing feature, allowing you to present, discuss, and work together in real time.
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
