import React from "react";

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-upper">
        <div className="section-text__title-centered text-white">
          A Plan for Every Cats's Needs
        </div>
      </div>
      <div className="pricing-lower">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Spynx</span>
              <div className="pricing-card__title">
                $30<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>5 Matches Per Day</li>
              <li>10 Messages Per Day</li>
              <li>Unlimited App Usage</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Persian</span>
              <div className="pricing-card__title">
                $56<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Unlimited Matches</li>
              <li>Unlimited Messages</li>
              <li>Unlimited App Usage</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Maine</span>
              <div className="pricing-card__title">
                $20<span> / month</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Priority Listings</li>
              <li>Unlimited Matches & Messages</li>
              <li>Unlimited App Usage</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
