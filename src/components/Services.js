import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How Felisity can help you!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="phone-portrait-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Easily Usage</div>
              <div className="section-text__desc">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="people-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Elite Clientele</div>
              <div className="section-text__desc">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Quick Messaging</div>
              <div className="section-text__desc">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
